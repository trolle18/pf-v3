import React from "react"; 

const languages = [
  { code: 'en', name: 'English'},
  { code: 'da', name: 'Dansk'}
]

const translations = {
  'en': {
    'header': 'Spring',
    'paragraf': 'Hello',
    'lang-choice': 'Choose language:'
  },
  'da': {
    'header': 'Forår',
    'paragraf': 'Hej',
    'lang-choice': 'Vælg sprog:'
  }
}

const getTranslation = (lang, text) => {
  return translations[lang][text];
}

class LanguageSwitcher extends React.Component {
  state = { lang: 'en' };
  
  changeLanguageHandler = (lang) => {
    this.setState({ lang: lang });
  }
  
  render() {
    return (
      <div className="languageSwitcher">
        <p>
          {getTranslation(this.state.lang, 'paragraf')}
        </p>
        <h3>
          {getTranslation(this.state.lang, 'header')}  
        </h3>
        <p className="small">
          {getTranslation(this.state.lang, 'lang-choice')}
        </p>
        <LanguageSwitcherSelector 
          lang={this.state.lang}
          handleChangeLanguage={this.changeLanguageHandler}
        />
      </div>
    )
  }
}

class LanguageSwitcherSelector extends React.Component {
  onChange = e =>{
    this.props.handleChangeLanguage(e.target.className);
  }
  
  render() {
    const options = languages.map((language) => { 
      // if(language.code !== this.props.lang){
        return (
          <button onClick={this.onChange}>
            <span value={language.code} className={language.code}> {language.code}</span>
          </button>
        )
      // }  
    });
    
    return (
      <div className="lang"> 
        <div 
          className={this.props.lang}
        >
        </div>
        <div class="dropdown" >
          {options}
        </div>
      </div>
    )
  }
}

export default LanguageSwitcher

// ReactDOM.render(
  // <LanguageSwitcher />, 
  // document.getElementById('root')
// )
