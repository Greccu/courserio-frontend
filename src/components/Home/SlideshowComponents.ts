import styled from "styled-components";
import {FadedSecondaryColor, Fadedx2SecondaryColor, PrimaryColor, SecondaryColor} from "../../utils/theme"

export const SlideshowContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 90%;
`

export const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`

export const Slide = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  aspect-ratio: 21/9;
  border-radius: 40px;
  text-align: center;
  background-color: ${SecondaryColor};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const SlideTitle = styled.a`
  padding: 20px;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto;
  font-size: 20px;
  background: ${PrimaryColor};
  opacity: 0.8;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: ${SecondaryColor};
  &:hover {
    color: ${FadedSecondaryColor};
  }
  &:focus {
    color: ${Fadedx2SecondaryColor};
  }
`

export const SlideshowDots = styled.div`
  text-align: center;
`

export type SlideshowDotProps = {
  active : boolean
}

export const SlideshowDot = styled.div<SlideshowDotProps>(
 ({active = false})=>`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: ${active?'#6a0dad':'#c4c4c4'};
`)