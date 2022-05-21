import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID, } from '@angular/core';

let document: any = window.document;
@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {

  }

  loadScript(name: string): void {
    let isExist = this.checkingExist(name, 'js');
    if (isPlatformBrowser(this.platformId) && isExist == false) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementById('dynamic_inject_js')?.before(src);
    }
  }
  loadScriptBeforeBody(name: string): void {
    let isExist = this.checkingExist(name, 'js');
    if (isPlatformBrowser(this.platformId) && isExist == false) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementsByTagName('body')[0].appendChild(src);
    }
  }

  loadCss(name: string): void {
    let isExist = this.checkingExist(name, 'css');
    if (isPlatformBrowser(this.platformId) && isExist == false) {
      const src = document.createElement('link');
      src.rel = "stylesheet";
      src.href = name;
      document.getElementsByTagName('head')[0].appendChild(src);
    }
  }
  checkingExist(name: string, flag: string): boolean {
    let isFound = false;
    if (flag == 'js') {
      let scripts = document.getElementsByTagName("script")
      for (let i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src')!.includes(name)) {
          isFound = true;
        }
      }
    }
    if (flag == 'css') {
      let scripts = document.getElementsByTagName("link")
      for (let i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('href') != null && scripts[i].getAttribute('href')!.includes(name)) {
          isFound = true;
        }
      }
    }
    return isFound;
  }
  // private scripts: any = {};
  // private css : any = {};
  // constructor() {
  //   ScriptStore.forEach((script: any) => {
  //     this.scripts[script.name] = {
  //       loaded: false,
  //       src: script.src
  //     };
  //   });
  //   CssStore.forEach((script: any) => {
  //     this.css[script.name] = {
  //       loaded: false,
  //       src: script.src
  //     };
  //   });
  // }

  // loadJS(...scripts: string[]) {
  //   var promises: any[] = [];
  //   scripts.forEach((script) => promises.push(this.loadScript(script)));
  //   return Promise.all(promises);
  // }
  // loadJSBeforeBody(...scripts: string[]) {
  //   var promises: any[] = [];
  //   scripts.forEach((script) => promises.push(this.loadScriptBeforeBody(script)));
  //   return Promise.all(promises);
  // }
  // loadStyleSheet(...scripts: string[]) {
  //   var promises: any[] = [];
  //   scripts.forEach((script) => promises.push(this.loadCss(script)));
  //   return Promise.all(promises);
  // }

  // private loadScript(name: string) {
  //   return new Promise((resolve, reject) => {
  //     //resolve if already loaded
  //     if (this.scripts[name].loaded) {
  //       resolve({ script: name, loaded: true, status: 'Already Loaded' });
  //     }
  //     else {
  //       //load script
  //       let script = document.createElement('script');
  //       script.type = 'text/javascript';
  //       script.src = this.scripts[name].src;
  //       script.async = true;
  //       if (script.readyState) {  //IE
  //         script.onreadystatechange = () => {
  //           if (script.readyState === "loaded" || script.readyState === "complete") {
  //             script.onreadystatechange = null;
  //             this.scripts[name].loaded = true;
  //             resolve({ script: name, loaded: true, status: 'Loaded' });
  //           }
  //         };
  //       } else {  //Others
  //         script.onload = () => {
  //           this.scripts[name].loaded = true;
  //           resolve({ script: name, loaded: true, status: 'Loaded' });
  //         };
  //       }
  //       script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
  //       document.getElementById('dynamic_inject_js')?.before(script);
  //     }
  //   });
  // }

  // private loadScriptBeforeBody(name: string) {
  //   return new Promise((resolve, reject) => {
  //     //resolve if already loaded
  //     if (this.scripts[name].loaded) {
  //       resolve({ script: name, loaded: true, status: 'Already Loaded' });
  //     }
  //     else {
  //       //load script
  //       let script = document.createElement('script');
  //       script.type = 'text/javascript';
  //       script.src = this.scripts[name].src;
  //       script.async = true;
  //       if (script.readyState) {  //IE
  //         script.onreadystatechange = () => {
  //           if (script.readyState === "loaded" || script.readyState === "complete") {
  //             script.onreadystatechange = null;
  //             this.scripts[name].loaded = true;
  //             resolve({ script: name, loaded: true, status: 'Loaded' });
  //           }
  //         };
  //       } else {  //Others
  //         script.onload = () => {
  //           this.scripts[name].loaded = true;
  //           resolve({ script: name, loaded: true, status: 'Loaded' });
  //         };
  //       }
  //       script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
  //       document.getElementsByTagName('body')[0].appendChild(script);
  //     }
  //   });
  // }

  // private loadCss(name: string) {
  //   return new Promise((resolve, reject) => {
  //     //resolve if already loaded
  //     if (this.css[name].loaded) {
  //       resolve({ script: name, loaded: true, status: 'Already Loaded' });
  //     }
  //     else {
  //       //load script
  //       let script = document.createElement('link');
  //       script.type = 'stylesheet';
  //       script.href = this.css[name].src;
  //       script.async = true;
  //       if (script.readyState) {  //IE
  //         script.onreadystatechange = () => {
  //           if (script.readyState === "loaded" || script.readyState === "complete") {
  //             script.onreadystatechange = null;
  //             this.css[name].loaded = true;
  //             resolve({ script: name, loaded: true, status: 'Loaded' });
  //           }
  //         };
  //       } else {  //Others
  //         script.onload = () => {
  //           this.css[name].loaded = true;
  //           resolve({ script: name, loaded: true, status: 'Loaded' });
  //         };
  //       }
  //       script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
  //       document.getElementsByTagName('head')[0].appendChild(script);
  //     }
  //   });
  // }
}
