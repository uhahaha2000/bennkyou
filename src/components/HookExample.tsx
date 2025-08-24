'use client';

import { useState, useEffect } from 'react';

// 🚫 일반 함수 - React 규칙을 따르지 않음
function normalFunction() {
  // 이렇게 하면 안 됨! React Hook 규칙 위반
  // const [count, setCount] = useState(0); // ❌ 에러!
  return "일반 함수는 Hook을 사용할 수 없어요!";
}

// ✅ Custom Hook - React 규칙을 따름
function useCounter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  
  return { count, increment, decrement };
}

// ✅ Custom Hook - useEffect 사용
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default function HookExample() {
  const { count, increment, decrement } = useCounter();
  const windowSize = useWindowSize();

  return (
    <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
      <h2 className="text-xl font-bold mb-4 text-green-800">
        🔧 Hook vs 일반 함수
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-green-700">📊 카운터 (Custom Hook 사용)</h3>
          <div className="flex items-center gap-4 mt-2">
            <button 
              onClick={decrement}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
            <span className="text-lg font-bold">{count}</span>
            <button 
              onClick={increment}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-green-700">🖥️ 윈도우 크기 (Custom Hook 사용)</h3>
          <p className="text-sm text-green-600">
            너비: {windowSize.width}px, 높이: {windowSize.height}px
          </p>
        </div>

        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Hook 규칙</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Hook은 컴포넌트 최상위에서만 호출</li>
            <li>• Hook은 React 함수 컴포넌트에서만 호출</li>
            <li>• 일반 함수에서는 Hook 사용 불가</li>
            <li>• Custom Hook은 'use'로 시작해야 함</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
