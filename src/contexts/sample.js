import React, { Component, createContext } from "react";

const Context = createContext(); //context를 만듦

//Provider 와 Consumer 는 Context를 이용하기 위한 컴포넌트
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Provider {
    state = {
        value: "기본값",
    };
}
