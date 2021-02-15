import { component } from "vue-tsx-support";
import { HelloWorld } from "../components/HelloWorld";

export const Home = component({
  name: "Home",
  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    );
  },
});
