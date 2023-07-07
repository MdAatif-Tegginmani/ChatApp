import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId=
        {"8ba4cb21-6a47-401a-a420-092854e3bdbb"}
        username={props.user.username}
        secret={props.user.secret}
        
      />
    </div>
  );
};

export default ChatsPage;