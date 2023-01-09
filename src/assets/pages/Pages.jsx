import React from "react";

const Pages = () => {
  return (
    <>
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      {/* <!------ Include the above in your HEAD tag ----------> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="well well-sm">
              <form className="form-horizontal" action="" method="post">
                <fieldset>
                  <legend className="text-center">Contact us</legend>

                  {/* <!-- Name input--> */}
                  <div className="form-group">
                    <label className="col-md-3 control-label" for="name">
                      Name
                    </label>
                    <div className="col-md-9">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* <!-- Email input--> */}
                  <div className="form-group">
                    <label className="col-md-3 control-label" for="email">
                      Your E-mail
                    </label>
                    <div className="col-md-9">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* <!-- Message body --> */}
                  <div className="form-group">
                    <label className="col-md-3 control-label" for="message">
                      Your message
                    </label>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Please enter your message here..."
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  {/* <!-- Form actions --> */}
                  <div className="form-group">
                    <div className="col-md-12 text-right">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
