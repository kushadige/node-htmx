import { type Request, type Response } from "express";

const getHomePage = (_: Request, res: Response) => {
  const context = {
    view: "home",
  };
  res.status(200).render("home", context);
};

const getProfilePage = (_: Request, res: Response) => {
  const context = {
    view: "profile",
  };
  res.status(200).render("profile", context);
};

export const pageController = {
  getHomePage,
  getProfilePage,
};
