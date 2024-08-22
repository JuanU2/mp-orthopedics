import Menu from "../photos/menu.svg"
import Close from "../photos/close.svg"

export function toggleMenu() {
    const menu = document.querySelector('.menuContainer');
    const icon = document.getElementById('MenuIcon');
    const newSrc = icon?.getAttribute('src')?.includes(Menu) ? Close : Menu;
    icon?.classList.add('close');
    setTimeout(() => {
      icon?.setAttribute('src', newSrc);
      icon?.classList.remove('close');
    }, 300);
    menu?.classList.toggle('show');
  }
  

export default function OptionMenu() {
  return (
    <div className="svg-menu-picture">
        <div className='slidingMenu' id='slidingMenu'>
        <div className='menuBody'>
        </div>
        </div>
        <div className='menuActivateButtonBlock' id='menuButtonBlock' onClick={toggleMenu} >
            <img src={Menu} alt="MenuIcon" id='MenuIcon' className='menuActivateButton'/>
        </div>
      </div>
  )
}
