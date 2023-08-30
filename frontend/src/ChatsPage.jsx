import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId=
        {"0964bb8f-e48a-4aae-93ae-cd3b2401bc10"}
        username={props.user.username}
        secret={props.user.secret}
        
      />
    </div>
  );
};

export default ChatsPage;