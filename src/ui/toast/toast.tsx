import React from 'react';
import {ToastContainer, ToastContainerProps} from "react-toastify";
import styled from "styled-components";

export const CustomToast = () => (
    <CustomToastContainer>
        <ToastContainer position="bottom-right"
                        autoClose={3000}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='colored'
        />
    </CustomToastContainer>
);

const CustomToastContainer = styled.div<ToastContainerProps>`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  z-index: 9999;

  .Toastify {
    z-index: 9999;
  }

  .Toastify__toast-icon {
    display: none;
  }

  .Toastify__toast-theme--colored.Toastify__toast--default {
    background: gold;
  }

  .Toastify__toast-theme--colored.Toastify__toast--info {
    background: darkorange;
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: green;
  }

  .Toastify__toast-theme--colored.Toastify__toast--warning {
    background: gold;
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: red;
  }

`
