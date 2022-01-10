// 글쓰기 페이지로 가는 함수
function goShoppingQuestionWrite(){
	document.shoppingQuestionForm.action = "/spring/shopping/questionWrite";
	document.shoppingQuestionForm.submit();
}

// 글 상세정보 페이지로 가는 함수
function goShoppingQuestionDetail(questionNumber){
	
	document.shoppingQuestionForm.questionNumber.value = questionNumber;
	document.shoppingQuestionForm.action = "/spring/shopping/questionDetail";
	document.shoppingQuestionForm.submit();
}

// 글 목록으로 가는 함수
function goShoppingQuestionList(){
	location.href="/spring/shopping/questionList";
}

// 글 삭제 컨트롤러로 가는 함수
function goShoppingQuestionDelete(questionNumber){
	
	document.shoppingQuestionForm.questionNumber.value = questionNumber;
	document.shoppingQuestionForm.action = "/spring/shopping/questionDelete";
	document.shoppingQuestionForm.submit();
	
}

function goWriteResultCodeAlert(resultCode, type){
	
	if(resultCode == "0000"){
		if(type == "작성"){
			alert("작성 성공");
		}else{
			alert("삭제 성공");
		}
	}else if(resultCode == "9999"){
		if(type == "작성"){
			alert("작성 실패");
		}else{
			alert("삭제 실패");
		}
	}
}

function goUpdateeResultCodeAlert(resultCode){
	
	if(resultCode == "0000"){
		alert("수정 성공");
	}else if(resultCode == "9999"){
		alert("수정 실패");
	}
}

function goPage(pageNumber){
	location.href="/spring/shopping/pageMove?pageNumber="+pageNumber;
}







