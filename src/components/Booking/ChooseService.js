import React from 'react'

const ChooseService = () => {
  return (
    <div
                  class="tab-content"
                  id="tab1"
                //   style={{ display: activeTab === "tab1" ? "block" : "none" }}
                >
                  <h2 class="text-center">Choose a serivce</h2>
                  <div class="tab-container">
                    <div
                      class="tab-select text-center active"
                    //   onClick={() => showTab(0)}
                    >
                      <img
                        class="select-service-img"
                        src="/assets/images/service-select-1.png"
                        width={"100px"}
                        alt=""
                      />
                      <h3 class="text-center">Massage</h3>
                      <p class="text-center">
                        From relaxation to recovery — treatments that fit your
                        lifestyle.
                      </p>
                    </div>
                    <div
                      class="tab-select text-center"
                    //   onClick={() => showTab(1)}
                    >
                      <img
                        class="select-service-img"
                        src="/assets/images/service-select-2.png"
                        width={"110px"}
                        alt=""
                      />
                      <h3 class="text-center">Assisted Stretch</h3>
                      <p class="text-center">
                        Give your muscles a refresh — target your needs and pain
                        points.
                      </p>
                    </div>
                  </div>

                </div>
  )
}

export default ChooseService