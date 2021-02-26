import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  seo_data = {
    'title': 'Flowlyf | Furniture and Lifestyle, reimagined!',
    'description': 'Reimagine your work style with The FlowDesk, a smart table with superior ergonomics, clean design and adaptive modes that’ll take your work style to the next level.',
    'og:locale': 'en_GB',
    'og:site_name': 'Flowlyf',
    'og:image': "https://www.flowlyf.com/assets/flow-img/product-page/Flowdesk-standing%20desk-best%20for%20Work%20from%20home-%20modern%20office-ergonomic%20design-%20product%20page-%20modern%20design-%20dual%20screen%20setup-%20dark%20pine%20table%20top-height%20adjustable%20desk-flowlyf.png",
    'og:image:secure_url': "https://www.flowlyf.com/assets/flow-img/product-page/Flowdesk-standing%20desk-best%20for%20Work%20from%20home-%20modern%20office-ergonomic%20design-%20product%20page-%20modern%20design-%20dual%20screen%20setup-%20dark%20pine%20table%20top-height%20adjustable%20desk-flowlyf.png",
    // 'og:image:type': 'image/png',
    // 'og:image:width': '1024',
    // 'og:image:height': '1024',
    'og:type': 'website',
    'og:url': 'https://www.flowlyf.com',
    'og:title': 'Flowlyf | Furniture and Lifestyle, reimagined!',
    'og:description': "Reimagine your work style with The FlowDesk, a smart table with superior ergonomics, clean design and adaptive modes that’ll take your work style to the next level.",
    'keywords': 'Flowdesk, Flowlyf, Smart Table',
    'twitter:text:title': 'Flowlyf | Furniture and Lifestyle, reimagined!',
    'twitter:image': 'https://www.flowlyf.com/assets/flow-img/product-page/Flowdesk-standing%20desk-best%20for%20Work%20from%20home-%20modern%20office-ergonomic%20design-%20product%20page-%20modern%20design-%20dual%20screen%20setup-%20dark%20pine%20table%20top-height%20adjustable%20desk-flowlyf.png'
  }

  seo_data_page = {
    '/home': {
      title: 'Flowlyf | Furniture and Lifestyle, reimagined!',
      description: 'Reimagine your work style with The FlowDesk, a smart table with superior ergonomics, clean design and adaptive modes that’ll take your work style to the next level.'
    },
    '/flowdesk': {
      title: 'FlowDesk | A smart table that takes your workstyle to the next level',
      description: 'FlowDesk intuitively adapts to your workmodes at a press of a button. The ergonomic design results in an Immediate jump in your productivity and health, keeping you in a state of flow.'
    },
    '/pricing-plan': {
      title: 'Flowdesk | Pricing as flexible as the desk it self',
      description: 'Our aim is to make your Journey effortless. Just like the FlowDesk our price plans are flexible too. Buy out rightly or subscribe on monthly basis, choose what suits your workstyle.'
    },
    '/contact': {
      title: 'Flowdesk | Get in touch with us',
      description: 'Have questions regarding the FlowDesk.Feel free to get in touch.'
    },
    '/faq': {
      title: 'Flowdesk | Get your questions answered',
      description: 'Have questions regarding the FlowDesk.Refer our FAQs'
    },
    '/cart': {
      title: 'Upgrade to FlowDesk',
      description: 'Eases you up, ensuring a feeling of energized focus and comfort.Step up your workstyle and let this be the desk where all the magic happens.'
    }
  }

  constructor(private _meta: Meta, private _title: Title) { }

  // private setMetaTags(seo_data: any) {
  //   this._title.setTitle(seo_data['title']);
  //   this._meta.updateTag({ name: 'description', content: seo_data['description'] });
  //   this._meta.updateTag({ name: 'title', content: seo_data['title'] });
  //   this._meta.updateTag({ property: 'og:locale', content: seo_data['og:locale'] });
  //   this._meta.updateTag({ property: 'og:site_name', content: seo_data['og:site_name'] });
  //   this._meta.updateTag({ property: 'og:image', content: seo_data['og:image'] });
  //   this._meta.updateTag({ property: 'og:image:secure_url', content: seo_data['og:image'] });
  //   this._meta.updateTag({ property: 'og:image:type', content: seo_data['og:image:type'] });
  //   this._meta.updateTag({ property: 'og:image:width', content: seo_data['og:image:width'] });
  //   this._meta.updateTag({ property: 'og:image:height', content: seo_data['og:image:height'] });
  //   this._meta.updateTag({ property: 'og:type', content: seo_data['og:type'] });
  //   this._meta.updateTag({ property: 'og:url', content: seo_data['og:url'] });
  //   this._meta.updateTag({ property: 'og:title', content: seo_data['og:title'] });
  //   this._meta.updateTag({ property: 'og:description', content: seo_data['og:description'] });
  //   this._meta.updateTag({ name: 'keywords', content: seo_data['keywords'] });
  // }

  updateMetaTags(page = '', ) {
    if (!(this.seo_data_page && this.seo_data_page[`${page}`])) {
      page = '/home';
    }
    this._title.setTitle(this.seo_data_page[`${page}`]['title']);
    this._meta.updateTag({ name: 'description', content: this.seo_data_page[`${page}`]['description'] });
    this._meta.updateTag({ name: 'title', content: this.seo_data_page[`${page}`]['title'] });
    this._meta.updateTag({ property: 'og:title', content: this.seo_data_page[`${page}`]['title'] });
    this._meta.updateTag({ property: 'twitter:text:title', content: this.seo_data_page[`${page}`]['title'] });
    this._meta.updateTag({ property: 'og:description', content: this.seo_data_page[`${page}`]['description'] });
  }

}
