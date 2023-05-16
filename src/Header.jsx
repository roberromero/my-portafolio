
const Header = ({technologiesKnown, technologiesInProgress}) => {
    
  return (
    <header>
        
        <div className='container-header'>
            <h1 id='name'>Roberto Romero</h1>
            <p className='header-paragraph'>Known technologies</p>
            <div className='container__tech-logos'>
                {technologiesKnown.map((img, index)=> {
                        return <img className='tech-logos' src={img} key={index}/>
                })}
            </div>
            <p className='line'></p>
            <p className='header-paragraph'>Learning ...</p>
            <div className='container__tech-logos'>
            {technologiesInProgress.map((img, index)=> {
                        return <img className='tech-logos tech-logos__inprogress' src={img} key={index}/>
                })}
            </div>
        </div>
    </header>
  )
}

export default Header
