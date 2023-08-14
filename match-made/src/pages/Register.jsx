import React, { useState } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import InputSearch from "../components/InputSearch/InputSearch";
import ProfileCarousel from "../components/ProfileCarousel";
import CarouselDefault from "../components/CarouselDefault";
import "./Register.css";
import HobbyDialog from "../components/HobbyDialog";

function Register() {
  const [data, setData] = useState();

  const handleDetails = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="flex h-full mb-10 max-lg:h-full max-sm:h-full">
          {/* left card*/}
          <div className="inline-block overflow-scroll h-full w-9/12 rounded-br-xl rounded-tr-xl bg-card_light py-4 dark:bg-card_dark">
            <h1 className="pl-16 pt-4 text-3xl font-bold text-font_light dark:text-font_dark">
              User Details
            </h1>
            <form action="" method="post" onSubmit={handleDetails}>
              <div className="mt-8 ml-32">
                {/* First ROW FORM FullName */}
                <div className="flex mt-6 w-11/12 items-center">
                  <label
                    htmlFor="FullName"
                    className="text-xl font-bold text-font_light dark:text-font_dark w-2/12"
                  >
                    Full-Name :
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    onChange={(e) =>
                      setData((data) => {
                        return { ...data, FullName: e.target.value };
                      })
                    }
                    className="flex ml-2 mr-2 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                    placeholder="Example: Ramesh Gursimransingh Kaur"
                    required
                  />
                </div>

                {/* Second ROW FORM Age, Maritial Status, City, Living with Family */}
                <div className="flex flex-inline mt-6 justify-between w-11/12 items-center">
                  {/* Age */}
                  <div className="flex items-center">
                    <label
                      htmlFor="Age"
                      className="text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Age :
                    </label>
                    <Dropdown
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, Age: e.target.value };
                        })
                      }
                    />
                  </div>

                  {/* Martial Status */}
                  <div className="flex items-center">
                    <label
                      htmlFor="MartialStatus"
                      className="ml-20  text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Martial Status :
                    </label>
                    <Dropdown
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, MartialStatus: e.target.value };
                        })
                      }
                    />
                  </div>

                  {/* City */}
                  <div className="flex items-center w-6/12">
                    <label
                      htmlFor="city"
                      className="ml-20 w-1/6 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      City :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, City: e };
                        })
                      }
                    />
                  </div>
                </div>

                {/* Third ROW FORM */}
                <div className="flex flex-inline mt-6 justify-between w-11/12 items-center">
                  {/* Living with Family */}
                  <div className="flex items-center w-1/3">
                    <label
                      htmlFor="Living with Family"
                      className="w-1.5/6 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Joint Family:
                    </label>
                    <Dropdown
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, JointFamily: e.target.value };
                        })
                      }
                    />
                  </div>

                  {/* Family City */}
                  <div className="flex items-center w-1/3">
                    <label
                      htmlFor="Family City"
                      className="w-2/3 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Family City :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, FamilyCity: e };
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center w-1/3"></div>
                </div>

                {/* Fourth ROW FORM */}
                <div className="flex flex-inline mt-6 justify-start w-11/12 items-center">
                  {/* Cast */}
                  <div className="flex items-center w-3/12">
                    <label
                      htmlFor="Religion"
                      className="w-1/3 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Religion:
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, Caste: e };
                        })
                      }
                    />
                  </div>

                  {/* Community */}
                  <div className="flex items-center w-4/12">
                    <label
                      htmlFor="MotherTongue"
                      className="w-4/6 ml-2 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Mother Tongue:
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, Community: e };
                        })
                      }
                    />
                  </div>
                  {/* Sub-Community */}
                  <div className="flex items-center w-5/12">
                    <label
                      htmlFor="Community"
                      className="w-5/12 ml-2 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Community :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, SubCommunity: e };
                        })
                      }
                    />
                  </div>
                </div>

                {/* Fifth ROW FORM */}
                <div className="flex flex-inline mt-6 justify-start w-11/12 items-center">
                  {/* Highest Qualification */}
                  <div className="flex items-center w-1/2">
                    <label
                      htmlFor="Highest Qualification"
                      className="w-9/12 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Highest Qualification :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, HighestQualification: e };
                        })
                      }
                    />
                  </div>

                  {/* Universities Name */}
                  <div className="flex items-center w-1/2">
                    <label
                      htmlFor="Universities Name"
                      className="w-4/6 text-xl ml-16 font-bold text-font_light dark:text-font_dark"
                    >
                      Universities Name :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, UniversitiesName: e };
                        })
                      }
                    />
                  </div>
                </div>

                {/* Sixth ROW FORM */}
                <div className="flex flex-inline mt-6 justify-start w-11/12 items-center">
                  {/* Working Organisation */}
                  <div className="flex items-center w-2/12">
                    <label
                      htmlFor="Working_Organisation"
                      className=" text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Sector:
                    </label>
                    <Dropdown
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, Sector: e.target.value };
                        })
                      }
                    />
                  </div>

                  {/* Name Organisation */}
                  <div className="flex items-center w-6/12">
                    <label
                      htmlFor="Organisation_Name"
                      className="w-5/6 ml-6 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Organisation Name:
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, OrganisationName: e };
                        })
                      }
                    />
                  </div>

                  {/* Role at Organisation */}
                  <div className="flex items-center w-5/12">
                    <label
                      htmlFor="Your_Role"
                      className="w-5/12 ml-6 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Your Role :
                    </label>
                    <InputSearch
                      list=""
                      onChangeValue={(e) =>
                        setData((data) => {
                          return { ...data, YourRole: e };
                        })
                      }
                    />
                  </div>
                </div>

                {/* Seventh ROW FORM */}
                <div className="flex flex-inline mt-6 justify-start w-11/12 items-center">
                  {/* Hobbies & Interest */}
                  <div className="flex items-center w-full">
                    <label
                      htmlFor="Hobbies_Interest"
                      className="w-3/12 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Hobbies & Interest:
                    </label>
                    <HobbyDialog/>
                  </div>
                </div>

                {/* Eigth ROW FORM */}
                <div className="flex flex-inline mt-6 justify-start w-11/12 items-center">
                  {/* Your Descriptions */}
                  <div className="flex items-center w-full mr-2">
                    <label
                      htmlFor="Your Descriptions"
                      className="w-3/12 text-xl font-bold text-font_light dark:text-font_dark"
                    >
                      Your Descriptions:
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      placeholder="Describe something about yourself to let other profiles know you at a glance"
                      className="flex w-full bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex flex-col rounded-xl border-solid border-2 w-40 h-12 mr-24 mt-6 text-bg_dark dark:text-bg_light font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark"
                >
                  Save Details
                </button>
              </div>
            </form>
          </div>

          {/* right card*/}
          <div className="pb-12 pt-6 flex flex-col ml-4 w-3/12 rounded-bl-xl rounded-tl-xl bg-card_light dark:bg-card_dark">
            <h1 className="pl-8 pt-2 text-3xl font-bold text-font_light dark:text-font_dark">
              User Profile
            </h1>
            {/* Profile Carousel */}
            <div className="m-4 mt-4 flex h-auto">
              {/* <ProfileCarousel /> */}
              <CarouselDefault />
            </div>
            {/* Upload Button */}
            <div className="flex m-4 justify-center">
              <div className="relative inline-block overflow-hidden">
                <button className="flex items-center text-xl font-bold justify-center rounded-xl border-solid border-2 w-72 h-12 text-bg_dark dark:text-bg_light bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark">
                  Upload File
                </button>
                <input
                  type="file"
                  className="absolute font-bold text-xl left-0 top-0 opacity-0 h-full"
                  multiple
                />
              </div>
            </div>
            {/* Astro Section */}
            <div className="flex flex-col ml-4 mr-4 mt-2 mb-0 justify-center items-center p-4 rounded-lg bg-button_light dark:bg-button_dark">
              <h3 className="mb-4 text-2xl font-bold text-font_light dark:text-font_dark">
                Astro Details
              </h3>
              <div className="mt-2 flex justify-center items-center w-full mr-4">
                <label
                  htmlFor=""
                  className="ml-2 w-40 text-xl font-bold text-font_light dark:text-font_dark"
                >
                  {" "}
                  D. O. B.
                </label>
                <input
                  className="flex w-2/3 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
                  type="datetime-local"
                  name=""
                  id="myDatetimePicker"
                />
              </div>

              <div className="flex justify-center items-center w-full mt-4 ">
                <label
                  htmlFor=""
                  className="w-60 text-xl font-bold text-font_light dark:text-font_dark"
                >
                  {" "}
                  Place Of Birth
                </label>
                <InputSearch
                  list=""
                  onChangeValue={(e) =>
                    setData((data) => {
                      return { ...data, HobbiesAndInterest: e };
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
