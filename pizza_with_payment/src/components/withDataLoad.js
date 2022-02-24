import React from "react";
import isoFetch from "isomorphic-fetch";
let withDataLoad = (fetchConfig, propName) => (Component) => {
  class ComponentWithDataLoad extends React.PureComponent {
    componentDidMount() {
      this.loadData();
    }

    state = {
      dataReady: false,
      combinedProps: null,
      combinedProps1: null
    };

    fetchError = (errorMessage) => {
      console.error(errorMessage);
    };

    fetchSuccess = (loadedData) => {
      let lStore = JSON.parse(window.localStorage.getItem(propName));
      console.log("lStore", lStore);
      if (!lStore) {
        window.localStorage.setItem(propName, JSON.stringify(loadedData));
      }
      console.log("из виз", propName, loadedData);

      this.setState({ dataReady: true });
      this.setState({
        combinedProps: { ...this.props, [propName]: loadedData }
      });
    };

    loadData = async () => {
      try {
        let response = await isoFetch(fetchConfig.URL, fetchConfig);
        if (!response.ok) {
          throw new Error("fetch error " + response.status);
        }
        let data = await response.json();
        this.fetchSuccess(data);
      } catch (error) {
        this.fetchError(error.message);
      }
    };
    render() {
      if (!this.state.dataReady) return <div>загрузка данных...</div>;
      return <Component {...this.state.combinedProps} />;
    }
  }
  return ComponentWithDataLoad;
};

export { withDataLoad };
