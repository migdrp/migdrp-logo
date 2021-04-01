/* eslint-disable @typescript-eslint/no-this-alias */
import { MigdrpIcon } from './migdrp-icon';

export class MigdrpLogo extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['has-text', 'dark-color', 'text-size'];
  }

  get hasText(): string {
    return this.getAttribute('has-text') as string;
  }
  set hasText(newValue: string) {
    this.setAttribute('has-text', newValue);
  }

  get textSize(): string {
    return this.getAttribute('text-size') as string;
  }
  set textSize(newValue: string) {
    this.setAttribute('text-size', newValue);
  }

  get darkColor(): string {
    return this.getAttribute('dark-color') as string;
  }
  set darkColor(newValue: string) {
    this.setAttribute('dark-color', newValue);
  }

  get customUri(): string {
    return this.getAttribute('custom-uri') as string;
  }
  set customUri(newValue: string) {
    this.setAttribute('custom-uri', newValue);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch (name) {
      case 'has-text':
        if (this.hasText === 'true') this.migdrpText.style.display = 'block';
        else {
          this.migdrpText.style.display = 'none';
        }
        break;

      case 'dark-color':
        if (newValue != oldValue) {
          if (/^#[0-9A-F]{6}$/i.test(newValue)) {
            this.darkColor = newValue;
            if (this.migdrpIcon) {
              //console.log('Already loaded changing back color..');
              this.migdrpIcon.setAttribute('style', `--migdrp-icon-circle-color:${this.darkColor};`);
              this.migdrpText.style.color = this.darkColor;
              this.setAttribute('style', `--migdrp-logo-loader-darkcolor:${this.darkColor};`);
            }
          } else {
            this.darkColor = '#313131';
            throw new Error('Invalid dark-color. Please use Hex');
          }
        }
        break;

      case 'text-size':
        if (newValue !== oldValue) this.migdrpText.style.fontSize = newValue;
        break;

      case 'custom-uri':
        if (newValue !== oldValue) {
          oldValue = newValue;
        }
        break;
    }
  }

  private css(): string {
    return /*html*/ `
        <style>
            :host{
                display:block;
                margin:0;
                padding:0;
	            font-family: 'Quattrocento Sans', sans-serif;
                justify-content:center;
                align-items:center;
            }

            img{
                position:relative;
                
                width:var(--migdrp-logo-img-width, 100%);
                height:var(--migdrp-logo-img-height, 100%);
                margin:0;
                padding:0;
                align-self: center;
            }


            p{
                margin-top:var(--migdrp-logo-text-mt, -10%);
                font-size:var(--migdrp-logo-text-size, ${this.textSize});
                font-weight: bold;
                text-align: center;
                color:var(--migdrp-logo-text-color, ${this.darkColor}); 
                -webkit-animation: fadein 1s linear forwards;
                -moz-animation: fadein 1s linear forwards; 
                -ms-animation: fadein 1s linear forwards; 
                -o-animation: fadein 1s linear forwards; 
                animation: fadein 1s linear forwards;
            }


            span{
                color:var(--migdrp-logo-g-color, #84ce29);
            }


            migdrp-icon{
                position:relative;
                width:100%;
                height:100%;
                margin:0;
                padding:0;
                --migdrp-icon-circle-color:var(--migdrp-logo-icon-bgcolor, transparent);
            }


            #icon-container{
                width:100%;
                height:100%;
                opacity:0;
                transition:all .8s ease;
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }

            #loader-box{
                height: 80%;
                width: 80%;
                margin: 200% 0px 0 0;
                background-color:#fff;
                border-radius:50%;
                z-index: 2;
            }

            #loader-container{
                width:  100%;
                height: 100%;
                margin-top: -100%;
                padding:0;
                display:flex;
                justify-content:center;
                align-items:center;
                position:relative;
                opacity: 0;
                z-index: 5;
	            transition: all 1s linear;

                -webkit-animation: fadein .5s linear forwards;
                -moz-animation: fadein .5s linear forwards; 
                -ms-animation: fadein .5s linear forwards; 
                -o-animation: fadein .5s linear forwards; 
                animation: fadein .5s linear forwards;


            }

            @keyframes fadein           {  0% { opacity: 0; }   100% { opacity: 1 ; }   }
            @-moz-keyframes fadein      {  0% { opacity: 0; }   100% { opacity: 1 ; }   }
            @-webkit-keyframes fadein   {  0% { opacity: 0; }   100% { opacity: 1 ; }   }
            @-ms-keyframes fadein       {  0% { opacity: 0; }   100% { opacity: 1 ; }   }
            @-o-keyframes fadein        {  0% { opacity: 0; }   100% { opacity: 1 ; }   }

            @keyframes fadeout           {  0% { opacity: 1; }   100% { opacity: 0 ; }   }
            @-moz-keyframes fadeout      {  0% { opacity: 1; }   100% { opacity: 0 ; }   }
            @-webkit-keyframes fadeout   {  0% { opacity: 1; }   100% { opacity: 0 ; }   }
            @-ms-keyframes fadeout       {  0% { opacity: 1; }   100% { opacity: 0 ; }   }
            @-o-keyframes fadeout        {  0% { opacity: 1; }   100% { opacity: 0 ; }   }

            

            #loader{
                width:  100%;
                height: 100%;
                -webkit-animation: spin 1.3s linear infinite;
                        animation: spin 1.3s linear infinite;
            }


            #loader:before{
                content: "";
                position: fixed;
                top: 35%;
                left: 35%;
                right: 35%;
                bottom: 35%;
                border-radius: 50%;
                border: 1.3px solid transparent;
                border-top-color: var(--migdrp-logo-loader-darkcolor, ${this.darkColor});
                -webkit-animation: spin 2s cubic-bezier(0.48, 0.05, 0.46, 0.9) infinite;
                        animation: spin 2s cubic-bezier(0.48, 0.05, 0.46, 0.9) infinite;
            }


            #loader:after{
                content: "";
                position: fixed;
                top: 25%;
                left: 25%;
                right: 25%;
                bottom: 25%;
                border-radius: 50%;
                border: 1px solid transparent;
                border-top-color: #56bc43;
                -webkit-animation: spin 1.5s cubic-bezier(0.48, 0.05, 0.46, 0.9) infinite;
                        animation: spin 1.5s cubic-bezier(0.48, 0.05, 0.46, 0.9) infinite;
            }


            @-webkit-keyframes spin{  
                0%  {  -webkit-transform: rotate(0deg);  -ms-transform: rotate(0deg);  transform: rotate(0deg);  }
                100%{   -webkit-transform: rotate(360deg);  -ms-transform: rotate(360deg);  transform: rotate(360deg);  }
            }

            @-moz-keyframes spin{  
                0%  {  -webkit-transform: rotate(0deg);  -ms-transform: rotate(0deg);  transform: rotate(0deg);  }
                100%{   -webkit-transform: rotate(360deg);  -ms-transform: rotate(360deg);  transform: rotate(360deg);  }
            }

            @-ms-keyframes spin{  
                0%  {  -webkit-transform: rotate(0deg);  -ms-transform: rotate(0deg);  transform: rotate(0deg);  }
                100%{   -webkit-transform: rotate(360deg);  -ms-transform: rotate(360deg);  transform: rotate(360deg);  }
            }

            @-o-keyframes spin{  
                0%  {  -webkit-transform: rotate(0deg);  -ms-transform: rotate(0deg);  transform: rotate(0deg);  }
                100%{   -webkit-transform: rotate(360deg);  -ms-transform: rotate(360deg);  transform: rotate(360deg);  }
            }

            @keyframes spin{  
                0%  {  -webkit-transform: rotate(0deg);  -ms-transform: rotate(0deg);  transform: rotate(0deg);  }
                100%{   -webkit-transform: rotate(360deg);  -ms-transform: rotate(360deg);  transform: rotate(360deg);  }
            }




            

        </style>
        `;
  }

  private html(css: string): string {
    return /*html*/ `
        
        ${css}
        

        <div id='loader-container'>
            <div id='loader-box'>
                <div id="loader"></div>
            </div>
        </div>

        <div id="icon-container">
        </div>

        <p id="migdrp-text"> mi<span>g</span>drp </p>
        `;
  }

  private initTemplate(): void {
    this.template = this.html(this.css());
    (this.shadowRoot as ShadowRoot).innerHTML = this.template;

    this.loader = <HTMLDivElement>(this.shadowRoot as ShadowRoot).getElementById('loader-container');
    this.migdrpText = <HTMLParagraphElement>(this.shadowRoot as ShadowRoot).getElementById('migdrp-text');
    this.iconContainer = <HTMLParagraphElement>(this.shadowRoot as ShadowRoot).getElementById('icon-container');

    this.migdrpText.style.fontSize = `${this.offsetWidth * 0.2}px`;
    this.textSize = `${this.offsetWidth * 0.2}px`;

    //console.log(this.textSize)
  }

  private initEventListeners() {
    const migdrpText = this.migdrpText;
    const webComponent = this;

    const resize = () => {
      return () => {
        if (this.hasText) {
          migdrpText.style.fontSize = `${this.offsetWidth * 0.2}px`;
          webComponent.textSize = `${this.offsetWidth * 0.2}px`;
        }
      };
    };

    window.addEventListener('resize', resize());
  }

  private addFonts(): void {
    const fontLink = window.document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Quattrocento%20Sans';
    fontLink.rel = 'stylesheet';

    window.document.getElementsByTagName('head')[0].appendChild(fontLink);
  }

  private loadedObserver() {
    const resolutions = this.loadedResolutions;
    this.loaded = new Promise(function (resolve, reject) {
      resolutions.push({ resolve: resolve, reject: reject });
    });
  }

  private loader: HTMLDivElement = window.document.createElement('div');
  private iconContainer: HTMLDivElement = window.document.createElement('div');
  private migdrpText: HTMLParagraphElement = window.document.createElement('div');
  private migdrpIcon: MigdrpIcon = new MigdrpIcon();

  private template = '';

  private loadedResolutions: any[] = [];

  public loaded?: Promise<any>;

  public constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.initTemplate();
    this.initEventListeners();
    //this.addFonts();
  }

  connectedCallback(): void {
    this.importMigdrpIcon();
    this.loadedObserver();
  }

  private importMigdrpIcon() {
    //console.log("LoadingContent");

    if (this.customUri !== null && this.customUri !== undefined) {
      //console.log('no custom uri')

      this.iconContainer.style.opacity = '1';
      this.loader.style.display = 'none';
      /*
            setTimeout( () => { 
                this.loader.setAttribute("style", 
                    `-webkit-animation: fadeout .8s linear ; 
                    -moz-animation: fadeout .8s linear ;  
                    -ms-animation: fadeout .8s linear ; 
                    -o-animation: fadeout .8s linear ; 
                    animation: fadeout .8s linear ;`);  
                setTimeout( () => { 
                    this.iconContainer.style.opacity = '1';
                    this.loader.style.display = 'none';  
                }, 1000);
            }, 2000);

            */
      const color = this.darkColor === null ? '#313131' : this.darkColor;

      const container = (this.shadowRoot as ShadowRoot).getElementById('icon-container') as HTMLElement;
      container.innerHTML = /*html*/ `  <img src="${this.customUri}">      `;
      this.migdrpIcon = <MigdrpIcon>(this.shadowRoot as ShadowRoot).getElementById('migdrp-icon');
      this.migdrpIcon.setAttribute('style', `--migdrp-icon-circle-color:${color};`);
      //this.loadedResolutions[0].resolve(true);
    } else {
      //console.log('Using the default migdrp logo: ', this.customUri);

      import(/* webpackChunkName:"threejs" , webpackPrefetch:true */ './migdrp-icon').then(() => {
        setTimeout(() => {
          this.loader.setAttribute(
            'style',
            `-webkit-animation: fadeout .8s linear ; 
                        -moz-animation: fadeout .8s linear ;  
                        -ms-animation: fadeout .8s linear ; 
                        -o-animation: fadeout .8s linear ; 
                        animation: fadeout .8s linear ;`
          );
          setTimeout(() => {
            this.iconContainer.style.opacity = '1';
            this.loader.style.display = 'none';
          }, 1000);
        }, 2000);

        const color = this.darkColor === null ? '#313131' : this.darkColor;
        //console.log("Color:", color)
        const container = (this.shadowRoot as ShadowRoot).getElementById('icon-container') as HTMLElement;
        container.innerHTML = /*html*/ `  <migdrp-icon id="migdrp-icon"></migdrp-icon>      `;

        this.migdrpIcon = <MigdrpIcon>(this.shadowRoot as ShadowRoot).getElementById('migdrp-icon');
        this.migdrpIcon.setAttribute('style', `--migdrp-icon-circle-color:${color};`);
        //console.log(this.loadedResolutions)
        this.loadedResolutions[0].resolve(true);
      });
    }
  }
}

window.customElements.define('migdrp-logo', MigdrpLogo);
