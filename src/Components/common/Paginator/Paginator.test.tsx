import {create} from "react-test-renderer";
import {Paginator} from "./Paginator";

describe('Paginator component tests', () => {

  it('pages count is 11 but must be showed only 3', () => {

    const component = create(<Paginator totalUsersCount={11} pageSize={1} currentPage={1} pagesCountInPortion={5}
                                        onChangingCurrentPage={() => {
                                        }}/>)
    const root = component.root
    // eslint-disable-next-line testing-library/await-async-query
    let spans= root.findAllByType('span')
    expect(spans.length).toBe(3)
  })

  it('if current page is 11, only 1 button PREV must be enabled', ()=>{
    const component = create(<Paginator totalUsersCount={11} pageSize={1} currentPage={11} pagesCountInPortion={5}
                                        onChangingCurrentPage={() => {
                                        }}/>)
    const root = component.root
    // eslint-disable-next-line testing-library/await-async-query
    let button= root.findAllByType('button')
    expect(button.length).toBe(1)
  })
})