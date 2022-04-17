import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Body = () => {
  const [bgColor, setBgColor] = useState();
  const [page, setPage] = useState("flex");
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const onClick = (e) => {
    setBgColor(e.target.value);
  };

  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.id]: e.target.value,
    });
  };
  const onResetClick = (e) => {
    setText({ field1: "", field2: "", field3: "", field4: "" });
    setBgColor(e.target.value);
  };

  const onSubmitClick = (e) => {
    page === "flex" ? setPage("grid") : setPage("flex");
  };

  useEffect(() => {
    if (!text.field1 || !text.field2 || !text.field3 || !text.field4) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [text]);

  return (
    <div>
      <Header bgColor={bgColor} />
      {page === "flex" ? (
        <div className="flex">
          <div className=" container mx-auto flex flex-row mt-10 gap-x-10">
            <div className="flex flex-col w-1/5 gap-y-2 xs:hidden xl:pr-8">
              <button
                type="button"
                value="red"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Red
              </button>
              <button
                type="button"
                value="pink"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Pink
              </button>
              <button
                type="button"
                value="blue"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Blue
              </button>
              <button
                type="button"
                value="purple"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Purple
              </button>
              <button
                type="button"
                value="yellow"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Yellow
              </button>
              <button
                type="button"
                value="teal"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Teal
              </button>
              <button
                type="button"
                value="orange"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Orange
              </button>
              <button
                type="button"
                value="cyan"
                onClick={(e) => onClick(e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Cyan
              </button>
            </div>

            <div className="items-center w-3/5 xs:w-full xs:ml-8 xs:mr-10">
              <div className="flex  flex-col bg-white justify-center gap-y-10 place-items-center">
                <h3 className="text-xl font-semibold"> Flex Page</h3>

                <input
                  type="email"
                  name="email"
                  id="field1"
                  value={text.field1}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="field2"
                  value={text.field2}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="field3"
                  value={text.field3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="field4"
                  value={text.field4}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  onChange={(e) => handleChange(e)}
                />

                <div className="flex flex-row gap-x-10 items-center justify-center">
                  <button
                    type="button"
                    value=""
                    disabled={
                      !text.field1 &&
                      !text.field2 &&
                      !text.field3 &&
                      !text.field4
                    }
                    onClick={(e) => onResetClick(e)}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  disabled:opacity-50"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    value=""
                    disabled={disabled}
                    onClick={(e) => onSubmitClick(e)}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400  disabled:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      ) : (
        <div>
          <div className="grid mx-auto">
            <div className=" container mx-auto grid grid-cols-5 mt-10 gap-x-10">
              <div className="grid grid-rows-8 gap-y-2 xs:hidden">
                <button
                  type="button"
                  value="red"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Red
                </button>
                <button
                  type="button"
                  value="pink"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Pink
                </button>
                <button
                  type="button"
                  value="blue"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Blue
                </button>
                <button
                  type="button"
                  value="purple"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Purple
                </button>
                <button
                  type="button"
                  value="yellow"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Yellow
                </button>
                <button
                  type="button"
                  value="teal"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Teal
                </button>
                <button
                  type="button"
                  value="orange"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Orange
                </button>
                <button
                  type="button"
                  value="cyan"
                  onClick={(e) => onClick(e)}
                  className="inline-grid items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Cyan
                </button>
              </div>

              <div className="items-center  pr-10 col-span-3 xs:col-span-5 xs:ml-8">
                <div className="grid  gap-y-10 place-items-center">
                  <h3 className="text-xl font-semibold"> Grid Page</h3>

                  <input
                    type="email"
                    name="email"
                    id="field1"
                    value={text.field1}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="email"
                    name="email"
                    id="field2"
                    value={text.field2}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="email"
                    name="email"
                    id="field3"
                    value={text.field3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="email"
                    name="email"
                    id="field4"
                    value={text.field4}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    onChange={(e) => handleChange(e)}
                  />

                  <div className="grid grid-cols-2 gap-x-10 items-center justify-center">
                    <button
                      type="button"
                      value=""
                      disabled={
                        !text.field1 &&
                        !text.field2 &&
                        !text.field3 &&
                        !text.field4
                      }
                      onClick={(e) => onResetClick(e)}
                      className="inline-grid items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  disabled:opacity-50"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      value=""
                      disabled={disabled}
                      onClick={(e) => onSubmitClick(e)}
                      className="inline-grid items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400  disabled:opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <Footer bgColor={bgColor} />
    </div>
  );
};

export default Body;
