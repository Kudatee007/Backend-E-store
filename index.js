const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 9000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/productRoutes");
const blogRouter = require("./routes/blogRoute");
const couponRouter = require("./routes/couponRoutes");
const brandRouter = require("./routes/brandRoutes");
const enqRouter = require("./routes/enqRoute");
const colorRouter = require("./routes/colorRoute");
const blogCatRouter = require("./routes/blogCatRoutes");
const categoryRouter = require("./routes/productcategoryRoutes");
const morgan = require("morgan");
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/blogcategory", blogCatRouter);
app.use("/api/product", productRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}....`);
});
