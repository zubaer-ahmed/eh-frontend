import { Outlet, Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav className="shrink-0 sticky top-0 h-14 w-full border-b bg-gray-100 space-y-8 z-10">
        <ul className="flex items-center h-full space-x-4 px-4 font-medium overflow-x-auto">
          <li>
            <div className="h-full flex items-center justify-center px-2">
              <Link to="/" className="flex-none">
                <svg
                  fill="#0000FF"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.824 16.675c-.105.726-1.587 2.609-2.269 2.882-.232.093-.457.07-.637-.068-.116-.09-.235-.272-1.833-2.866l-.475-.773c-.183-.277-.148-.642.078-.92.223-.27.549-.37.832-.262.016.008 1.195.397 1.195.397 2.688.883 2.775.917 2.891 1.002.17.139.249.356.214.608h.004zm-5.386-3.946c-.19-.289-.187-.63.01-.865l.746-1.019c1.642-2.235 1.732-2.353 1.843-2.431a.636.636 0 0 1 .652-.024c.651.316 1.966 2.269 2.045 3.019v.025a.623.623 0 0 1-.259.587c-.123.079-.235.125-3.291.866-.483.123-.752.19-.91.247l.021-.023c-.302.091-.64-.055-.831-.357l-.026-.025zm-1.875-1.159c-.146.046-.591.185-1.139-.702 0 0-3.694-5.813-3.78-5.992-.053-.201.011-.429.19-.613.55-.569 3.534-1.405 4.315-1.215.255.066.43.227.491.453.045.25.408 5.646.46 6.854.051 1.034-.392 1.171-.537 1.215zm.487 5.913c-.008 2.827-.015 2.922-.061 3.056-.079.211-.26.352-.51.398-.72.122-2.972-.71-3.441-1.267a.739.739 0 0 1-.157-.37c-.013-.09 0-.18.033-.259.057-.146.135-.259 2.158-2.63l.594-.706c.203-.26.563-.338.899-.204.325.124.528.405.506.708v1.259l-.021.015zm-6.13-1.808c-.222-.006-.42-.14-.535-.358-.083-.162-.142-.428-.18-.752-.102-.974.023-2.444.314-2.911.138-.214.338-.327.559-.319.146 0 .276.046 3.167 1.236l.848.337c.302.111.489.427.472.787-.022.348-.224.616-.521.696l-1.202.382c-2.689.864-2.778.888-2.919.877l-.003.025zm11.22 5.322h-.004l-.003.003.007-.003z"></path>
                </svg>
              </Link>
            </div>{" "}
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/worker">Worker</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <div class="pt-2 relative mx-auto text-gray-600">
              <input
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </li>
          <div className="grow"></div>
          <li>
            <Link className="material-button" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
