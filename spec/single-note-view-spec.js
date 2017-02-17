function testSingleNoteView(){
  var note = {
    displayNote: function() {
      return "This is a note";
    },
  };
  var singleNoteView = new SingleNoteView(note);
  var htmlString = "<div>This is a note</div>"
  assert.isTrue(singleNoteView.display() === htmlString);
}
console.log("10. Returns a string of HTML that represents the single note view.");
testSingleNoteView()
