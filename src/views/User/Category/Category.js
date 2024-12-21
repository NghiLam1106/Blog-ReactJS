import React, { useState } from "react";

function Category() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      id: 1,
      name: "Mark"
    },
    {
      id: 2,
      name: "Jacob"
    },
    {
      id: 3,
      name: "Larry the Bird"
    },
    {
      id: 4,
      name: "Larry the Bird"
    }
  ];

  // Lọc dữ liệu dựa trên giá trị tìm kiếm
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="justify-content-center align-items-center">
        <div className="mb-3 ms-5" style={{ width: "40%" }}>
          <input type="text" className="form-control" placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
        <table className="table table-striped mx-5 table-hover " style={{width: "80%"}}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="d-flex justify-content-end align-items-end">
                      <button type="button" id="" className="btn btn-primary me-3">Info</button>
                      <button type="button" id="" className="btn btn-warning me-3">Edit</button>
                      <button type="button" id="" className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Không tìm thấy dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end ms-5" style={{ width: "80%" }}>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Category;