import {Dispatch, useEffect} from 'react';
import './App.css';
import {connect, useSelector} from 'react-redux';
import {compose} from 'redux';
import {TaskAction} from './actiontypes';
import {RootState} from './reducers';
import {fetchData} from './actions/ListActions';
import {TaskModel} from './model/task-model';
import _ from "lodash";
import {POLLING_INTERVAL} from "./constants/api";

interface DispatchProps {
  getAllData: () => void
}

type DataProps = DispatchProps;

const App = ({getAllData}: DataProps) => {

  const listData = useSelector((state: RootState)=> {
    const res = state.title.data;
    return _.orderBy(res, ['title'],['asc'])
  });

  const isLoading = useSelector((state: RootState) => state.title.isLoading);

  useEffect(() => {
    const interval = setInterval(() => getAllData(), POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      {isLoading &&  <p>Please wait...</p>}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Label</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
          {
            !isLoading && !listData.length 
            ? (
                <tr>
                  <td colSpan={4}><p>No record found</p> </td>
                </tr>
                )
            : listData.map((item: TaskModel, index: number) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.label}</td>
                <td>{item.year}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch<TaskAction>) {
  return {
    dispatch,
    getAllData: () => dispatch(fetchData())
  }
}

const withConnect = connect(
  null,
  mapDispatchToProps
)
export default compose(withConnect)(App);
