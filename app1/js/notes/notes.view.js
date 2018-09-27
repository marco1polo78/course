;
(function (window) {

    window.NotesView = function () {}

    NotesView.prototype.render = function (renderCommand, data) {
        var renderCommands = {
            showNotes: function () {
                // !!! ДЗ !!! отрисовать заметки в HTML
                var div=[];
                
                for(var i=0;i < data.length;i++){
                    div[i] = document.createElement('div'+i);
                    div[i].className = "note";
                    div[i].innerHTML = data[i].text;
                    notes__list.appendChild(div[i]);
                }

            }
        }
        renderCommands[renderCommand]();
    }

}(window));