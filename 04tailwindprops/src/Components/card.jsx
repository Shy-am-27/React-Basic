import React from 'react'

function Card({ username = "Mine", post = "Not Yet", imgs = "https://picsum.photos/536/354" }) {  //default attribute values
  //console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8  dark:bg-slate-800">
        <img className="w-34 h-34 mx-auto" src={imgs} alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-5">
          <blockquote>  {/* just a another section type */}
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur cupiditate esse rerum? Ratione corporis consequuntur quia officiis eligendi asperiores?
            </p>
          </blockquote>
          <figcaption className=" uppercase font-bold">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card
