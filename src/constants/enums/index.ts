export enum ArrowsEnum {
    next,
    previous,
}

export enum GenderEnum {
    Male = "male",
    Female = "female",
}

export enum VerificationCodeTypesEnum {
    EmailVerification = "email-verification",
    ForgotPassword = "forgot-password",
}

export enum PaymentMethodsEnum {
    OnDelivery = "On Delivery",
    Online = "Online",
}

export enum OnlinePaymentMethodsEnum {
    CreditCard = "Credit Card",
    Paypal = "Paypal",
}

export enum DelivryOptionsEnum {
    Normal = "Normal",
    Fast = "Express",
}

export enum OrdersStatusEnum {
    Completed = "Completed",
    Pending = "Pending",
    Cancelled = "Cancelled",
}

export enum ActionsEnum {
    Add = "Added",
    Delete = "Deleted",
    Update = "Updated",
}

export enum CustomerRequestsEnum {
    Cart = "Cart",
    Favourite = "Favourite",
    Order = "Order",
}

export enum SettingsEnum {
    PersonalInfo = "Personal",
    Payment = "Payment",
    DeliveryType = "Delivery",
}

// NOTE keys must be from "ProductDetailsType" keys
export enum ProductsFilterEnum {
    Category = "category",
    Price = "price",
    Brand = "brand",
    Rating = "rating",
    Material = "material",
    Rooms = "rooms",
}

export enum SearchStorageEnum {
    History = "search_history",
}

export enum RatingCategorysEnum {
    Delivery = "Delivery",
    CustomerService = "Customer Service",
    Design = "Design",
    SizeAndFit = "Size & Fit",
    Comfort = "Comfort",
}

export enum EProductStatus {
    Hidden = "Hide",
    Normal = "Normal",
    Discount = "Discount",
}

export enum EActions {
    New = "new",
    Edit = "edit",
}
