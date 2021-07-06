var taskList = $("#taskList")
var btAdd = $('#btAdd')
var btReset = $('#btReset')
var btcleanup = $('#btCleanup')
var btsort = $('#btSort')
var inputTask = $('#inputTask')

function addi(){
    let listItem = $('<li>',{
        'class': 'list-group-item',
        'text' : inputTask.val()
    })
    if(inputTask.val() != '')
    {
        taskList.append(listItem)
    }
    listItem.click(() => {listItem.toggleClass('done')} )
    
    inputTask.val("")
    togglereset()
}

function cleaningDone()
{
    $('#taskList .done').remove()
    togglereset()
}

function sortTask()
{
    $('#taskList .done').appendTo(taskList)
}

function togglereset()
{
    btsort.prop('disabled', taskList.children().length <1)
    btcleanup.prop('disabled', taskList.children().length <1)
    btAdd.prop('disabled', inputTask.val == '')
    btReset.prop('disabled', inputTask.val == '')
}

inputTask.keypress((e) =>
{
    if(e.which ==13)
    addi()
})

inputTask.on('input',() => {
    togglereset()
})


btAdd.click(addi)
btReset.click(() => {
    inputTask.val('')
    togglereset(false)
})
btcleanup.click(cleaningDone)
btsort.click(sortTask)