import { set } from "./data.js";
import { render } from "./gameRender.js";

const room = "lsweWzeVd5sskh9sd0nLnK383kJ;HiHgF8Nlj23esosdm1f45AXQwsl4dsw";

const W = window.W;
if (W !== undefined) {
  W.setHooks({
    wappWillStart(start) {
      start();
    },
  });
}

export const roomId = () => {
  if (W !== undefined){
    set('roomId', W.wapp.getWisId())
    return W.wapp.getWisId();
  } else{
    set('roomId', room)
    return room;
  }
};
export const getUserFirstName = () => {
  if (W !== undefined) return W.user.getFirstname();
  else return "اکبر";
};
export const getUserId = () => {
  if (W !== undefined) {
    const id = W.user.getId()
    console.log(id)
    set("userId", id);
    return id;
  } else {
    const id = prompt('get number');
    set("userId", id);
    return id;
  }
};
render();
