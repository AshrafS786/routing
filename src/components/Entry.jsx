import { useNavigate } from "react-router-dom"

const Entry = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // send the data to the db
    // and switch the page

    e.preventDefault()
    navigate("/show")

    // navigate(1)
    // navigate(2)

  }
  return (
    <div className="flex justify-center">
      <button className='bg-blue-300 py-2 px-5 rounded-md ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Entry
