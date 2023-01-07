import ActivateUserIcon from "../constants/icons/ActivateUserIcon"
import BlackListUserIcon from "../constants/icons/BlackListUserIcon"
import Ellipsis from "../constants/icons/Ellipsis"
import EyeIcon from "../constants/icons/EyeIcon"
import SortIcon from "../constants/icons/SortIcon"
import Filters from "./Filters"
import { headings } from "../constants/utils/data"
import { useState, useRef } from 'react';
import { characterLimit, formatDate, getYearsBetween  } from "../constants/utils/helpers"
import Listener from '../hooks/Listener';
import { motion } from 'framer-motion';
import CaretDownIcon from "../constants/icons/CaretDownIcon"


