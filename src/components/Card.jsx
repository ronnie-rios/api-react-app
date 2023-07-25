/* eslint-disable react/prop-types */

const Card = ({ post }) => {
  const { id, title, body } = post;
 
  return (
    <div className="border border-gray-500 p-10">
      <h1 className="text-xl font-bold">{id}: {title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Card