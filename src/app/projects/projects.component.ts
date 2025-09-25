import { Component, OnInit } from '@angular/core';
import { ProjectCartComponent } from './project-cart/project-cart.component';
import { Carts } from '../global/carts';
import { Language } from '../global/language';
import { ToggleScroll } from '../global/togglescroll';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCartComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  arrowOutward = '../../assets/img/arrow_outward.png';

  joinPreview = '../../assets/img/joinPreview.png';
  polloLocoPreview = '../../assets/img/pollo-locoPreview.png';
  daBubblePreview = '../../assets/img/racoon_CSM.png';

  singleProjectBackground = '../../assets/img/single-project-back-ground.png';

  constructor(
    public carts: Carts,
    public languageService: Language,
    public scrollbarService: ToggleScroll
  ) { }

  /**
   * Lifecycle: nothing on init (placeholder)
   */
  ngOnInit(): void { }

  /**
   * Set hover state for a project preview on mouse enter
   * @param {string} enterproject - project identifier ('preJoin' | 'preElPollo' | 'preDaBubble')
   */
  mouseEnter(enterproject: string) {
    this.carts.hoverJoin = enterproject === 'preJoin' ? true : this.carts.hoverJoin;
    this.carts.hoverElPollo = enterproject === 'preElPollo' ? true : this.carts.hoverElPollo;
    this.carts.hoverDaBubble = enterproject === 'preDaBubble' ? true : this.carts.hoverDaBubble;
  }

  /**
   * Reset hover state for a project preview on mouse leave
   * @param {string} leaveproject - project identifier ('leaveJoin' | 'leaveElPollo' | 'leaveDaBubble')
   */
  mouseLeave(leaveproject: string) {
    this.carts.hoverJoin = leaveproject === 'leaveJoin' ? false : this.carts.hoverJoin;
    this.carts.hoverElPollo = leaveproject === 'leaveElPollo' ? false : this.carts.hoverElPollo;
    this.carts.hoverDaBubble = leaveproject === 'leaveDaBubble' ? false : this.carts.hoverDaBubble;
  }

  /**
   * Handle project selection: disable page scroll, set project flag, and open modal
   * @param {string} ele - project identifier ('Join' | 'ElPolloLoco' | 'DaBubble')
   */
  choosenProject(ele: string) {
    const html = document.documentElement;
    html.classList.add('no-scroll');
    this.getSingleProject(ele);
    this.carts.toggleModal();
  }

  /**
   * Activate the selected project flag in the carts service
   * @param {string} ele - project identifier ('Join' | 'ElPolloLoco' | 'DaBubble')
   * @returns {boolean | null} true if a matching project flag was set, otherwise null
   */
  getSingleProject(ele: string) {
    return ele === 'Join' ? this.carts.setJoin = true :
      ele === 'ElPolloLoco' ? this.carts.setElPolloLoco = true :
        ele === 'DaBubble' ? this.carts.setDaBubble = true : null;
  }
}
