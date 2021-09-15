import { useDispatch } from 'react-redux';
import styled from 'styled-components'; // style component
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';
// Reusable component
function SideBarOption({Icon, title, addChannelOption, id}) {
  const dispatch = useDispatch();
  const addChannel = async () => {
    console.log('addchannel');
    const channelName = prompt("Please enter the channel name");
    if(channelName) {
      db.collection('rooms').add({
        name: channelName
      })

    }
  };
  const selectChannel = () => {
    if(id) {
      dispatch(enterRoom({
        roomId: id,
      }))
    }
  };
  
  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel: selectChannel}
    > 
      { Icon && <Icon fontSize="small" style={{padding: 10}}  /> }
      { Icon ? (<h3> {title} </h3> ) : 
      ( 
        <SideBarOptionChannel>
          <span> # </span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 2px;
  cursor:pointer;

  :hover {
    opacity: .9;
    background-color: '#340e36';
  }

  > h3 > span {
    font-weight: 500;
    padding: 15px;
  }
`;
const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

`;
