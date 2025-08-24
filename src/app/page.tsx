import ThemeToggle from '../components/ThemeToggle';
import ThemeDisplay from '../components/ThemeDisplay';
import HookExample from '../components/HookExample';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          🎯 Context & Provider 학습하기
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-4">
            아래 버튼을 클릭해서 테마를 바꿔보세요!
          </p>
          <ThemeToggle />
        </div>

        {/* Context & Provider 개념 설명 추가 */}
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
            📦 Context & Provider 쉽게 이해하기
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-700 flex items-center">
                📦 Context = 데이터 상자
              </h3>
              <p className="text-purple-600 mb-2">
                <strong>데이터를 담아두는 저장 공간</strong>
              </p>
              <p className="text-sm text-purple-500">
                마치 상자 안에 물건들을 넣어두는 것처럼
              </p>
              <div className="mt-3 p-2 bg-purple-100 rounded text-xs text-purple-700">
                예: 테마 정보, 사용자 정보, 장바구니 등
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-blue-700 flex items-center">
                🚚 Provider = 전달자
              </h3>
              <p className="text-blue-600 mb-2">
                <strong>Context 상자에 있는 데이터를 전달해주는 역할</strong>
              </p>
              <p className="text-sm text-blue-500">
                마치 택배 배송부처럼 데이터를 각 컴포넌트에 전달
              </p>
              <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-700">
                예: ThemeProvider, UserProvider, CartProvider 등
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">💡 핵심 포인트</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Context는 데이터를 저장하는 &quot;상자&quot;</li>
              <li>• Provider는 데이터를 전달하는 &quot;배송부&quot;</li>
              <li>• 둘은 짝꿍! 상자만 있으면 전달할 수 없고, 배송부만 있으면 전달할 물건이 없음</li>
              <li>• 컴포넌트들이 props 없이도 데이터를 공유할 수 있게 해줌</li>
            </ul>
          </div>
        </div>

        {/* Hook 개념 설명 추가 */}
        <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-2 border-green-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">
            🔧 Hook 쉽게 이해하기
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-green-700 flex items-center">
                🚫 일반함수
              </h3>
              <p className="text-green-600 mb-2">
                <strong>Hook을 사용할 수 없는 일반적인 함수</strong>
              </p>
              <p className="text-sm text-green-500">
                React의 특별한 기능을 사용할 수 없음
              </p>
              <div className="mt-3 p-2 bg-red-100 rounded text-xs text-red-700">
                ❌ useState, useEffect 등 사용 불가
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-700 flex items-center">
                ✅ Hook (Custom Hook)
              </h3>
              <p className="text-teal-600 mb-2">
                <strong>React의 마법 도구를 사용할 수 있는 함수</strong>
              </p>
              <p className="text-sm text-teal-500">
                useState, useEffect 등 React 기능 사용 가능
              </p>
              <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-700">
                ✅ use로 시작하는 이름 규칙
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">🔍 Hook 사용 규칙</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hook은 컴포넌트 최상위에서만 호출</li>
              <li>• Hook은 React 함수 컴포넌트에서만 호출</li>
              <li>• 일반 함수에서는 Hook 사용 불가</li>
              <li>• Custom Hook은 &quot;use&quot;로 시작해야 함</li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">🎯 Hook의 장점</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• React 상태 관리 가능 (useState)</li>
              <li>• 부수효과 처리 가능 (useEffect)</li>
              <li>• 컴포넌트 리렌더링 가능</li>
              <li>• 로직 재사용 및 커스터마이징</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ThemeDisplay />
        </div>

        <div className="mb-8">
          <HookExample />
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-bold mb-4">🔍 코드 구조 설명</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">1. Context 생성</h3>
              <p className="text-gray-600">ThemeContext.tsx에서 createContext로 컨텍스트 생성</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Provider 설정</h3>
              <p className="text-gray-600">ThemeProvider에서 Context.Provider로 데이터 제공</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Custom Hook 사용</h3>
              <p className="text-gray-600">useTheme()으로 어디서든 테마 정보 접근 가능</p>
            </div>
          </div>
        </div>

        {/* 전체 개념 요약 */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <h2 className="text-xl font-bold mb-4 text-center text-indigo-800">
            🎓 전체 개념 요약
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">📦</div>
              <h4 className="font-semibold text-indigo-700">Context</h4>
              <p className="text-indigo-600">데이터 저장소</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚚</div>
              <h4 className="font-semibold text-indigo-700">Provider</h4>
              <p className="text-indigo-600">데이터 전달자</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔧</div>
              <h4 className="font-semibold text-indigo-700">Hook</h4>
              <p className="text-indigo-600">데이터 사용 도구</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-indigo-100 rounded text-center">
            <p className="text-sm text-indigo-700">
              <strong>Context(상자) + Provider(전달자) + Hook(도구) = 완벽한 데이터 공유 시스템!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
