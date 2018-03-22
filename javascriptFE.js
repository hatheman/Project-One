var stage = 0;
var questionSection = $("#OneQuestion");
var selectTab = $("#selectTab");
var questionContainer = $("#questionContainer");
var rest = $("#rest");

var all_questions = ["Which general area would you like to move to?", 
                    "second question?","third question?","fourth question?", "last question?"];
var question_options = [
    ["west coast", "South", "midwest","northeast","pacific"],
    ["options", "options"],
    ["options", "options"],
    ["options", "options"],
    ["options", "options"]
  ];



function changeQuestion() {
    stage++;
    if (stage >= all_questions.length){
        selectTab.hide();
        questionSection.hide();
    }
    selectTab.empty();
    selectTab.hide();
    //set up the new options
    for (var i = 0; i<question_options[stage].length; i++){
        var option = $("<option>");
        var iStr = i.toString();
        var optStr = "option"+iStr;
        option.attr('id', "optStr");
        option.text(question_options[stage][i]);
        selectTab.append(option);
    }
    questionSection.toggleClass('bounceInLeft bounceOutRight'); 
    var qtext = $("#questionText");
     
    questionSection.one("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend ",
              function(event) {
        qtext.text(all_questions[stage]);
        questionSection.removeClass('bounceOutRight');
        questionSection.addClass('bounceInLeft');
        
    });
     selectTab.show(1400);
}
