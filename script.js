
    
    
    
    
    // Lấy thông tin sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Thiết lập thông tin sản phẩm tương ứng
    let productImage, productName, productDescription, productPrice;
    switch (productId) {
      case '1':
        productImage = '/images/merce.png';
        productName = 'Mercedes-Benz S-Class';
        productDescription = 'Mercedes-Benz S-Class';
        productPrice = '$62,300';
        break;
      case '2':
        productImage = '/images/toyota1.png';
        productName = 'Toyota Fortuner 2022';
        productDescription = 'Toyota Fortuner 2022';
        productPrice = '$62,300';
        break;
      case '3':
        productImage = '/images/chevrolet-trax.png';
        productName = 'Chevrolet Trax 2022';
        productDescription = 'Chevrolet Trax 2022';
        productPrice = '$62,300';
        break;
      case '4':
        productImage = '/images/bmw.png';
        productName = 'BMW X5 2022';
        productDescription = 'BMW X5 2022';
        productPrice = '$62,300';
        break;
      case '5':
        productImage = '/images/hyundai-custin-2.png';
        productName = 'Hyundai Custin 2022';
        productDescription = 'Hyundai Custin 2022';
        productPrice = '$62,300';
        break;
      case '6':
        productImage = '/images/vinfast.png';
        productName = 'VinFast Lux SA2.0';
        productDescription = 'VinFast Lux SA2.0';
        productPrice = '$62,300';
        break;
      case '7':
        productImage = '/images/mazda3.png';
        productName = 'Mazda 3 2022';
        productDescription = 'Mazda 3 2022';
        productPrice = '$62,300';
        break;
      case '8':
        productImage = '/images/suzuki-xl7-CAM.png';
        productName = 'Suzuki XL7 2022';
        productDescription = 'Suzuki XL7 2022';
        productPrice = '$62,300';
        break;
        case '9':
        productImage = '/images/volvo.png';
        productName = 'Volvo XC90 2022';
        productDescription = 'Volvo XC90 2022';
        productPrice = '$62,300';
        break;
        case '10':
        productImage = '/images/lexus.png';
        productName = 'Lexus RX 350 2022';
        productDescription = 'Lexus RX 350 2022';
        productPrice = '$62,300';
        break;
        case '11':
        productImage = '/images/lamborghini.png';
        productName = 'Lamborghini Aventador 2022';
        productDescription = 'Lamborghini Aventador 2022';
        productPrice = '$62,300';
        break;
        case '12':
        productImage = '/images/KIA.png';
        productName = 'KIA Seltos 2022';
        productDescription = 'KIA Seltos 2022';
        productPrice = '$62,300';
        break;
        case '13':
        productImage = '/images/ford.png';
        productName = 'Ford Ranger 2022';
        productDescription = 'Ford Ranger 2022';
        productPrice = '$62,300';
        break;
        case '14':
        productImage = '/images/subaru.png';
        productName = 'Subaru Forester 2022';
        productDescription = 'Subaru Forester 2022';
        productPrice = '$62,300';
        break;
        case '15':
        productImage = '/images/ferrari.png';
        productName = 'Ferrari 2022';
        productDescription = 'Ferrari 2022';
        productPrice = '$62,300';
        break;
        case '16':
        productImage = '/images/mitsubishi.png';
        productName = 'Mitsubishi Xpander 2022';
        productDescription = 'Mitsubishi Xpander 2022';
        productPrice = '$62,300';
        break;
      default:
        productImage = '';
        productName = '';
        productDescription = '';
        productPrice = '';
    }

    // Hiển thị thông tin sản phẩm
    document.getElementById('productImage').src = productImage;
    document.getElementById('productName').textContent = productName;
    document.getElementById('productDescription').textContent = productDescription;
    document.getElementById('productPrice').textContent = productPrice;


  