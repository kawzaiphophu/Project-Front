import React from 'react'
import Nav from '../component/Nav'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Nav />

      <div className="grid">
        <header className="page-header">
          <div className="content">
            <div className='container' >
              <div className="typing">
                <h2 className="text-uppercase">Hi&nbsp;Welcome&nbsp;To&nbsp;My&nbsp;Website</h2>
              </div>
              <hr />
            </div>
          </div>
        </header>
        {/* <aside className="page-leftbar">
          <div className="content">
            <h2>Menu</h2><br />
            <Link>menu 1</Link><br />
            <Link>menu 2</Link><br />
            <Link>menu 3</Link><br />
            <Link>menu 4</Link><br />
            <Link>menu 5</Link><br />
            <Link>menu 6</Link><br />
            <Link>menu 7</Link><br />
            <Link>menu 8</Link><br />
            <Link>menu 9</Link><br />
            <Link>menu 10</Link><br />

          </div>
        </aside> */}

        <main className="page-main">
          <div className="content">
            <div className='container'>
              <img className='rounded-circle' style={{ width: '200px', hight: '100px' }} src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />
              <h2 className='d-flex p-2'>My Name Is Kaw </h2>
              <p className='d-flex p-2'>Somboon Zaiphophu Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem soluta harum nemo earum tenetur quae omnis rerum! Praesentium, voluptatum nesciunt perspiciatis quos aliquid dicta! Inventore recusandae animi ad odit doloribus.</p>
            </div>
            <hr />
            <div className='container-fluid w-100'>
              <div class="grid-item">
                <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content-item">
                  <div className="container mt-3 d-flex justify-content-center">
                    <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text"></p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main >
        <footer className="page-footer">
          <div className="content">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner bg-light" style={{ width: '90%', height: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
                <div className="carousel-item active ">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://media.istockphoto.com/id/1303088024/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=DPxor3wASuZoJk2AfJFU_v225Ae1ffANNXX_tJSVUn8=" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>)
}

export default Home