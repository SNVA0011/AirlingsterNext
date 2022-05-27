import React from "react"; 
import Image from "next/image"

export default function Enginebox(props) {
  return (
   <>
    <div
      className={
        "discover-the-best enginebanner_sctn full-w " +
        (props.smallbanner ? props.smallbanner : "")
      }
    >
      <section className="banner-wrap"> 
        <div className="container py-5">
        <div className="row align-items-center py-5 py-xl-3"> 
            <div className="col-xl-7 col-12">
              {" "}
           <div className="Enginebox-leftrentals">
           <span className="Engine-flight-span">Flight, hotel & Car Rental</span>
              <h1 className="Engine-Discover-with text-capitalize">Discover the best Flight With Us.</h1>
              <form action="#" className="site-banner__search layout-02 d-flex">
                <div className="field-input col"> 
                  <input
                    className="site-banner__search__input open-suggestion"
                    id="s"
                    type="text"
                    name="s"
                    placeholder="Your Flight"
                    autocomplete="off"
                  />
                  <div className="search-suggestions name-suggestions"></div>
                </div>
                <div className="field-input col"> 
                  <input
                    className="site-banner__search__input open-suggestion"
                    id="loca"
                    type="text"
                    name="where"
                    placeholder="Your city"
                    autocomplete="off"
                  />
                  <div className="search-suggestions location-suggestions">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="las la-location-arrow"></i>
                          <span>Current location</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>San Francisco, CA</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="field-submit">
                  <button aria-label="Search Button">
                  <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
           </div>  
            </div>
            <div className="col-xl-5 col-12 d-none d-xl-block pr-0">
            <Image src={'/images/banner.png'} className="airoplane-img" alt="Banner" width="485" height="308"></Image>
            </div>
          </div>
        </div>
      </section>

     
    </div>

<div className="shape-bottom bigbanner-wgb">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
  <path className="shape-fill" fill="#f7f1fd" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg>
</div>
   </>
  );
}
