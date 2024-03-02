import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="max-w-md w-full bg-blue-800 p-6 rounded-lg">
        <form className="space-y-4">
          <div className="text-center text-white">
            <h2 className="text-2xl font-semibold">Đăng nhập</h2>
          </div>
          <div>
            <label htmlFor="" className="text-white">
              Tên Đăng Nhập
            </label>
            <input
              type=""
              id=""
              className="w-full p-2 rounded-md"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded-md"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Đăng nhập
          </button>
          <div className="text-center text-white">
            Nếu bạn chư có tài khoản. hãy <Link to="/dangky" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300 underline">
              Đăng ký
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;