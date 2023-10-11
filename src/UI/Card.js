import clasess from './Card.module.css'


const Card = (prosp)=>{
  
    return (
        <div className={clasess.card}>
            {prosp.children}
        </div>
    )

}
export default Card