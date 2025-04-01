import pic1 from './assets/export.jpg';
import build from './assets/build.jpeg';
import "./home.css";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="home">
                    <h1>Welcome to Mexuri Framework</h1>
                    <p>Your one-stop solution for modern web development. Mexuri Framework is designed to simplify the process of building web applications.</p>
                    <p>It provides a set of tools and libraries that make it easy to create responsive and dynamic web applications. With Mexuri Framework, you can focus on building your application without worrying about the underlying technology.</p>
                    <p>It is designed to be easy to use and flexible, allowing developers to create applications that meet their specific needs.</p>
                    <p>Whether you are a beginner or an experienced developer, Mexuri Framework has something to offer.</p>
                    <p>It is built on top of modern web technologies such as React, Redux, and Webpack, making it a powerful and efficient framework for building web applications.</p>
                    <p>Join us today and start building amazing web applications with Mexuri Framework!</p>
                </div>

                <div className="home-pic">
                    <figure>
                        <img src={pic1} alt="first pic" />

                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum hic fugiat cupiditate, consequatur pariatur, eaque aliquid natus est repudiandae doloribus id praesentium vel eum, rerum reiciendis deserunt corrupti amet repellat?
                        </figcaption>
                    </figure>


                    <figure>
                        <img src={build} alt="first pic" />

                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum hic fugiat cupiditate, consequatur pariatur, eaque aliquid natus est repudiandae doloribus id praesentium vel eum, rerum reiciendis deserunt corrupti amet repellat?
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}