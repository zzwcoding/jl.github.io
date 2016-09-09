			var mo = function(e) {
				e.preventDefault();
			};
			var stop = function() {
				document.getElementById("auto").pause();
				$('.mui_sta').hide();
				$('.mui_end').show();

			}
			var star = function() {
				document.getElementById("auto").play();
				$('.mui_end').hide();
				$('.mui_sta').show();
			}
			var p_time = function(p, time, mode) {
				setTimeout(function() {
					$(p).addClass('animated ' + mode);
				}, time)
			}
			var p_time_ = function(p, time) {
				setTimeout(function() {
					$(p).fadeIn(1000);
				}, time)
			}
			var page = 1;
			$(document).ready(function() {
				Pace.on('hide', function() {
					console.log('done');
					full();
				});
			});
			var full = function() {
				$('#dowebok').fullpage({
					'verticalCentered': false,
					afterRender: function() {
						$('.mui_sta').show();
						$('.page1_div_logo').fadeIn(1000);
						$('.section1').find('p').delay(300).fadeIn(1000);
						$('.page1_div_line').find('.div_img').addClass('animated fadeInLeft_50');
						$('.img_Circle').addClass('flipInX_div fadeInUp_');
						$('#logo').addClass('swip_center_img rotate');
						//document.getElementById("auto").autoplay='autoplay';

					},
					afterLoad: function(anchorLink, index) {
						switch(index) {
							case 1:

								if(page == 2) {
									$('.page2_div_text').removeClass('flipInX_div flipInX');
									$('.page2_div_img').removeClass('animated fadeInLeft');
									$('.page2_div_line').find('.div_img').removeClass('animated fadeInLeft_50');
									var p = $('.page2_div_WeP').children();
									for(var i = 0; i < p.length; i++) {

										$(p[i]).removeClass('animated fadeInLeft_');
									}
								}

								$('.page1_div_logo').fadeIn(1000);
								$('.section1').find('p').delay(300).fadeIn(1000);
								$('.page1_div_line').find('.div_img').addClass('animated fadeInLeft_50');
								break;
							case 2:

								if(page == 1) {
									$('.page1_div_line').find('.div_img').removeClass('animated fadeInLeft_50');
									$('.page1_div_logo').css('display', 'none');
									$('.section1').find('p').css('display', 'none');
								} else {
									if(page == 3) {
										$('.page3_div_text').removeClass('flipInX_div flipInX');
										var p = $('.page3_div_div').find('img');
										var p_ = $('.page3_div_div').find('.page3_div_p').css('display', 'none');
										for(var i = 0; i < p.length; i++) {
											if(i == 1) {
												$(p[i]).removeClass('animated fadeInRight_50');
											} else {
												$(p[i]).removeClass('animated fadeInLeft_50');
											}
										}
										$('.page3_div_img4').css('display', 'none');
									}
								}

								$('.page2_div_text').addClass('flipInX_div flipInX');
								$('.page2_div_img').addClass('animated fadeInLeft');
								$('.page2_div_line').find('.div_img').addClass('animated fadeInLeft_50');
								var p = $('.page2_div_WeP').children();
								for(var i = 0; i < p.length; i++) {
									time = i * 200;
									p_time(p[i], time, 'fadeInLeft_');
								}
								break;
							case 3:

								if(page == 2) {
									$('.page2_div_text').removeClass('flipInX_div flipInX');
									$('.page2_div_img').removeClass('animated fadeInLeft');
									$('.page2_div_line').find('.div_img').removeClass('animated fadeInLeft_50');
									var p = $('.page2_div_WeP').children();
									for(var i = 0; i < p.length; i++) {

										$(p[i]).removeClass('animated fadeInLeft_');
									}
								} else {
									if(page == 4) {
										$('.page4_div_text').removeClass('flipInX_div flipInX');
										var p = $('.page4_div_left').children();
										var p_ = $('.page4_div_right').children();
										for(var i = 0; i < p.length; i++) {
											$(p[i]).removeClass('animated flip_');
										}
										for(var i = 0; i < p_.length; i++) {
											$(p_[i]).removeClass('animated flip');
										}
									}
								}

								$('.page3_div_text').addClass('flipInX_div flipInX');
								var p = $('.page3_div_div').find('img');
								var p_ = $('.page3_div_div').find('.page3_div_p');
								for(var i = 0; i < p.length; i++) {
									time = i * 300;
									if(i == 1) {
										p_time(p[i], time, 'fadeInRight_50');
									} else {
										p_time(p[i], time, 'fadeInLeft_50');
									}
								}
								for(var i = 0; i < p_.length; i++) {
									time = i * 300;
									p_time_(p_[i], time);
								}
								$('.page3_div_img4').delay(1200).fadeIn(1000);
								break;
							case 4:

								if(page == 3) {
									$('.page3_div_text').removeClass('flipInX_div flipInX');
									var p = $('.page3_div_div').find('img');
									var p_ = $('.page3_div_div').find('.page3_div_p').css('display', 'none');
									for(var i = 0; i < p.length; i++) {
										if(i == 1) {
											$(p[i]).removeClass('animated fadeInRight_50');
										} else {
											$(p[i]).removeClass('animated fadeInLeft_50');
										}
									}
									$('.page3_div_img4').css('display', 'none');
								} else {
									if(page == 5) {
										$('.page5_div_text').removeClass('flipInX_div flipInX');
										var p = $('.section5').find('p');
										var p_ = $('.section5').find('img');
										for(var i = 0; i < p.length; i++) {
											$(p[i]).css('display', 'none');
										}
										for(var i = 0; i < p_.length; i++) {
											$(p_[i]).removeClass('animated fadeInUp');
										}
									}
								}

								$('.page4_div_text').addClass('flipInX_div flipInX');
								var p = $('.page4_div_left').children();
								var p_ = $('.page4_div_right').children();
								for(var i = 0; i < p.length; i++) {
									time = i * 300;
									p_time(p[i], time, 'flip_');
								}
								for(var i = 0; i < p_.length; i++) {
									time = i * 300;
									p_time(p_[i], time, 'flip');
								}
								break;
							case 5:

								if(page == 4) {
									$('.page4_div_text').removeClass('flipInX_div flipInX');
									var p = $('.page4_div_left').children();
									var p_ = $('.page4_div_right').children();
									for(var i = 0; i < p.length; i++) {
										$(p[i]).removeClass('animated flip_');
									}
									for(var i = 0; i < p_.length; i++) {
										$(p_[i]).removeClass('animated flip');
									}
								} else {
									if(page == 6) {
										$('.page6_div_text').removeClass('flipInX_div flipInX');
										$('.page6_img').removeClass('animated bounceIn');
										var p_ = $('.page6_p');
										for(var i = 0; i < p_.length; i++) {
											$(p_[i]).removeClass('animated bounceIn');
										}
									}
								}

								$('.page5_div_text').addClass('flipInX_div flipInX');
								var p = $('.section5').find('p');
								var p_ = $('.section5').find('img');
								for(var i = 0; i < p.length; i++) {
									time = i * 300;
									p_time_(p[i], time);
								}
								for(var i = 0; i < p_.length; i++) {
									time = i * 300;
									p_time(p_[i], time, 'animated fadeInUp');
								}

								break;
							case 6:

								if(page == 5) {
									$('.page5_div_text').removeClass('flipInX_div flipInX');
									var p = $('.section5').find('p');
									var p_ = $('.section5').find('img');
									for(var i = 0; i < p.length; i++) {
										$(p[i]).css('display', 'none');
									}
									for(var i = 0; i < p_.length; i++) {
										$(p_[i]).removeClass('animated fadeInUp');
									}
								} else {
									if(page == 7) {
										$('.page7_div_text').removeClass('flipInX_div flipInX');
										$('.page7_img_right').removeClass('animated fadeInRight_50');
										var p = $('.page7_img_left');
										for(var i = 0; i < p.length; i++) {
											$(p[i]).removeClass('animated fadeInLeft_50');
										}
										var p = $('.page7_radius');
										for(var i = 0; i < p.length; i++) {
											$(p[i]).removeClass('animated fadeInRight_50');
										}
										$('.pace7_div_img4').css('display', 'none');
									}
								}

								$('.page6_div_text').addClass('flipInX_div flipInX');
								$('.page6_img').addClass('animated bounceIn');
								var p_ = $('.page6_p');
								for(var i = 0; i < p_.length; i++) {
									time = i * 300;
									p_time(p_[i], time, 'animated bounceIn');
								}
								break;
							case 7:

								if(page == 6) {
									$('.page6_div_text').removeClass('flipInX_div flipInX');
									$('.page6_img').removeClass('animated bounceIn');
									var p_ = $('.page6_p');
									for(var i = 0; i < p_.length; i++) {
										$(p_[i]).removeClass('animated bounceIn');
									}
								} else {
									if(page == 8) {
										$('.page8_div_text').removeClass('flipInX_div flipInX');
										$('.page8_div_img1').css('display', 'none');
										$('.page8_div_img2').css('display', 'none');
										$('.img_Circle').show();
									}
								}

								$('.page7_div_text').addClass('flipInX_div flipInX');
								$('.page7_img_right').addClass('animated fadeInRight_50');
								var p = $('.page7_img_left ');
								var p_ = $('.page7_radius ');
								for(var i = 1; i < p_.length + 1; i++) {
									time = i * 300;
									p_time(p_[i - 1], time, 'animated fadeInRight_50');
								}
								for(var i = 1; i < p.length + 1; i++) {
									time = i * 300;
									p_time(p[i - 1], time, 'animated fadeInLeft_50');
								}
								$('.pace7_div_img4').delay(1200).fadeIn(500);
								break;
							case 8:

								if(page == 7) {
									$('.page7_div_text').removeClass('flipInX_div flipInX');
									$('.page7_img_right').removeClass('animated fadeInRight_50');
									var p = $('.page7_img_left');
									for(var i = 0; i < p.length; i++) {
										$(p[i]).removeClass('animated fadeInLeft_50');
									}
									var p = $('.page7_radius');
									for(var i = 0; i < p.length; i++) {
										$(p[i]).removeClass('animated fadeInRight_50');
									}
									$('.pace7_div_img4').css('display', 'none');
								}
								$('.page8_div_text').addClass('flipInX_div flipInX');
								$('.page8_div_img1').fadeIn(500);
								$('.page8_div_img2').delay(500).fadeIn(500);
								$('.img_Circle').hide();
								break;
							default:
						}
					},
					onLeave: function(index, direction) {

						switch(index) {
							case 1:
								page = 1;
								break;
							case 2:
								page = 2;
								break;
							case 3:
								page = 3;
								break;
							case 4:
								page = 4;
								break;
							case 5:
								page = 5;
								break;
							case 6:
								page = 6;
								break;
							case 7:
								page = 7;
								break;
							case 8:
								page = 8;
								break;
							default:
						}

					}
				});
			};