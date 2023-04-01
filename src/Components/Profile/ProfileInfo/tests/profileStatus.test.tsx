import {create} from "react-test-renderer";
import ProfileStatus from "../ProfileStatus";
import React from "react";

describe('ProfileStatus component', () => {
  it.skip('status from props should be in state', () => {
    const component = create(
      <ProfileStatus
        status={"MMEOOWWW"}
        authUserId={1}
        updateUserStatusTC={() => {
        }}
        userID={1}/>)
    const instance = component.getInstance()
    // expect(instance?.state.status).toBe("MMEOOWWW")
  })

  it('<span> should be displayed after component created', () => {
    const component = create(
      <ProfileStatus
        status={"MMEOOWWW"}
        authUserId={1}
        updateUserStatusTC={() => {
        }}
        userID={1}/>)
    const instance = component.root
    // eslint-disable-next-line testing-library/await-async-query
    const span = instance.findByType("span")

    expect(span).not.toBeNull()
    expect(span.props.children).toBe("MMEOOWWW")
  })

  it('<input> must throw error after component created', () => {
    const component = create(
      <ProfileStatus
        status={"MMEOOWWW"}
        authUserId={1}
        updateUserStatusTC={() => {
        }}
        userID={1}/>)
    const instance = component.root

    expect(() => {
        // eslint-disable-next-line testing-library/await-async-query
        const input = instance.findByType("input")
      }
    ).toThrowError()
  })

  it('<input> must be displayed in editmode=true, instead of <span>', () => {
    const component = create(
      <ProfileStatus
        status={"MMEOOWWW"}
        authUserId={1}
        updateUserStatusTC={() => {
        }}
        userID={1}/>)
    const instance = component.root
    // eslint-disable-next-line testing-library/await-async-query
    const span = instance.findByType("span")
    span.props.onDoubleClick();
    // eslint-disable-next-line testing-library/await-async-query
    const input = instance.findByType("input")

    expect(input).not.toBeNull()
    expect(input.props.value).toBe("MMEOOWWW")
  })

  it.skip('props callback must be called', () => {

    const mockCallback = jest.fn()

    const component = create(
      <ProfileStatus
        status={"MMEOOWWW"}
        authUserId={1}
        updateUserStatusTC={mockCallback}
        userID={1}/>)
    const instance = component.getInstance()
    // instance?.deactivateEditMode()

    expect(mockCallback.mock.calls.length).toBe(1)
  })
})