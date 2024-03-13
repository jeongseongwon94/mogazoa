import Image from "next/image";
import React, { ReactNode } from "react";

export default function OAuthLayout() {
	const kakaoSrc = "/icons/kakao.svg";
	const googleSrc = "/icons/google.svg";

	return (
		<div className="text-center">
			<p className="mb-[2rem] text-[1.6rem] text-gray-200">
				SNS로 바로 시작하기
			</p>
			<div className="flex justify-center gap-[2rem]">
				<ImgContainer>
					<Image src={kakaoSrc} fill alt="google-icon" />
				</ImgContainer>
				<ImgContainer>
					<Image src={googleSrc} fill alt="kakao-icon" />
				</ImgContainer>
			</div>
		</div>
	);
}

function ImgContainer({ children }: { children: ReactNode }) {
	return (
		<div className="size-[5.5rem] cursor-pointer rounded-full border border-gray-200 p-[1.2rem]">
			<div className="relative size-full">{children}</div>
		</div>
	);
}
