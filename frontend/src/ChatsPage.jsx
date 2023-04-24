import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId=
        {"cb9927b3-d5be-4c6b-a05b-eb627e14e896"}
        username={props.user.username}
        secret={props.user.secret}
        
      />
    </div>
  );
};

export default ChatsPage;