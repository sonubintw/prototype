import "../components/Style/CreateNew.css"


function CreateNew(){
    return(
        <div>
            <div className="container bgClr mt-4">
            <form>
  <div className="form-group m-4">
    <label for="groupName" className="mb-2 text-lg">Create Group*</label>
    <input type="text" className="form-control inpt" id="groupName" placeholder="Enter Name"/>
  </div>

  <div className="form-group m-4">
    <label for="textArea" className="mb-2 text-lg">Add Description*</label>
    <textarea className="form-control mb-2" id="textArea" rows="3"></textarea>
  </div>
</form>
            </div>
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
    <div className="container bg-2 mt-4 ">
    <form className="d-flex">
  <div className="form-group m-4">
    <label for="groupName" className="mb-2 text-lg">Enter Term*</label>
    <input type="text" className="form-control " id="term" placeholder="Enter Term"/>
  </div>

  <div className="form-group m-4 ">
    <label for="textArea" className="mb-2 text-lg">Add Description*</label>
    <textarea className="form-control mb-2" id="textArea2" rows="3"></textarea>
  </div>
    <label htmlFor="img">Image</label>
    <input type="file" id="img" />

</form>
        </div>
        <div className="mkc ">
            <button className="btn btn-danger ">Create</button>

        </div>


        </div>
    )
}

export default CreateNew