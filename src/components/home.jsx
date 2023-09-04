import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  
  useEffect(()=> {
    if(localStorage.getItem('access_token') === null) {
      navigate('/login')
    } else {
      navigate('/groups')
    }
  }, [])
  return (
    <div className="HomePage">
      Home Page
      <div className="contain_profits_or_loss">
        <h1>about Us and our product</h1>
        <div className="money_owe_you">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, earum aut in placeat cupiditate assumenda accusamus impedit unde nostrum officiis temporibus eius nemo aspernatur aperiam distinctio sit rerum natus! Nam.
          Libero aspernatur nulla corporis reiciendis recusandae officiis cumque qui, dolore dicta esse eius cupiditate dignissimos unde asperiores distinctio aliquam veniam in! Enim numquam totam architecto, non voluptatum saepe veritatis repellendus!
          Eaque fugiat suscipit itaque voluptate assumenda error repellendus alias, perferendis eos quia perspiciatis veritatis. Odit eaque at hic unde repellat similique soluta facere quis, minus quod maxime placeat officia eius!
          Suscipit inventore, sint soluta quod sunt blanditiis maxime iure debitis reiciendis ipsum voluptatem quasi libero repellat aliquam ab? Laborum maiores iste repudiandae maxime dignissimos, nisi accusamus harum quod molestiae minus!
          Eligendi est reiciendis officiis quas, earum iste quam libero, beatae rem ut modi corrupti consequatur. Praesentium ipsum facere sapiente vero molestiae non totam ratione quis earum esse. Officiis, aliquam ullam.
        </div>
        <div className="money_you_owe">

        </div>
      </div>
    </div>
  )
}

export default Home