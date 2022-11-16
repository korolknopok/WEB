function task1()
{
    var text = document.form1.arrayInput.value;

    var array = text.split("; ");
    document.getElementById("log1").textContent = "";

    for (var i = 0; i < array.length; i++)
    {
        if (isNaN(parseInt(array[i]))) 
        {
            document.getElementById("log1").textContent =
            "Ошибка. Введите корректиные данные";
            return;
        }

        array[i] = parseInt(array[i]);
    }

    for (var i = 0; i < array.length - 1; i++)
    {
        for (var j = i; j < array.length; j++)
        {
            if (array[i] >= array[j]) continue;
            
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    document.getElementById("log1").textContent =
    "Второй по величине элемент равен " + array[1];
}

function task2 ()
{
    var time = new Date();
    var clock = (time.getHours() > 9 ? time.getHours() : "0"+time.getHours())
    +":"+(time.getMinutes() > 9 ? time.getMinutes() : "0"+time.getMinutes());
    document.getElementById("log2").textContent = 
    "От начала суток прошло " + clock;
}

function task3 ()
{
    alert("И куда это вы собрались?");
}

var k = 0;
function focus ()
{
    var colors = ["yellow", "red", "green"];
    document.getElementById("log").textContent = 
    "Скоро будет еще один цветной сюрприз...";
    document.bgColor = colors[k];
    k++;
    if (k == 3) k = 0;

    focusTimer();
}

function focusTimer()
{
    setTimeout(focus, 50000);
}