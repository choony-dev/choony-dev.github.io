const messages = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const userName = "홍길동"; // 사용자 이름 변수

// 기본 메시지 출력
function displayDefaultMessage() {
    const defaultMessageElement = document.createElement("div");
    defaultMessageElement.classList.add("default-message"); // 클래스 추가
    defaultMessageElement.textContent = `채팅 내역`; // 기본 메시지 설정
    messages.appendChild(defaultMessageElement);
}

// 초기 메시지 표시
displayDefaultMessage();

sendButton.addEventListener("click", () => {
    sendMessage(messageInput.value);
});

// 엔터 키 이벤트 처리
messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지 (예: 줄바꿈)
        sendMessage(messageInput.value); // 메시지 전송
    }
});

function sendMessage(message) {
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${userName}: ${message}`; // 메시지 형식 수정
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight; // 자동 스크롤
        messageInput.value = ""; // 입력 필드 비우기
    }
}