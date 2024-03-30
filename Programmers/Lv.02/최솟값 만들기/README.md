# https://school.programmers.co.kr/learn/courses/30/lessons/12941

## 각 배열의 원소를 곱했을 때, 최솟값을 만들기 위해서는 (가장 작은 수 \* 가장 큰 수) 를 곱한 수를 더하면 된다

### 그러면 첫번째 배열은 오름차순(작->큰)

### 두번째 배열은 내림차순(큰->작) 으로 정렬을 해주고 곱하면 된다

---

# sort 함수

# https://velog.io/@jakeseo_me/Javascript-Sort%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%A1%EC%A7%80%EC%8B%9D

## sort((a, b) => b - a )

## sort ((next, prev) => prev - next )

## arr.sort([compareFunction])

### [compareFunction] 은 다양한 언어에서 콜백함수로 작성된다

### 반환하는 값: 1 or 0 or -1 / 단, 변경은 -1에서만 일어난다

ex)

```
let numArr = [5,4,3,2,1];
numArr.sort((next, prev) => prev > next ? -1 : 0);

//return [1,2,3,4,5]
//이전 엘리먼트가 이후 엘리먼트보다 크면 순서를 바꾸기 때문에 결국 오름차순 정렬됨
```

### sort 함수의 핵심은 비교함수를 작성하는 것

### sort 함수는 원본을 변경하는 함수이기 때문에 주의

### sort 함수로 숫자 오름차순 정렬

### arr.sort((a,b) => a - b) : b(앞에 있는 값)가 더 클때만 a-b의 결과로 음수가 나온다 그러면 b 즉, 앞에 있는 값이 더 클 때 변경이 일어나니까 작은 값이 다 앞으로 오게 돼서 오름차순 정렬이 된다

### sort 함수로 숫자 내림차순 정렬

### arr.sort((a,b) => b - a ) :a(뒤에 있는 값) 이 클때만 b-a의 값이 음수로 나오니 변경일어남 , 작은 값은 뒤로 가게 됨
